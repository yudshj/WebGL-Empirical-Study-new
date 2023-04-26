import { Frame, Page, chromium } from 'playwright';
import fs from 'fs';
import zlib from 'zlib';
import pako from 'pako';


// const idx_url: string[][] = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));
const idx_url = [
  ["TEST-0", "https://www.babylonjs.com/demos/sponza/"],
  ["TEST-1", "https://www.pola.co.jp/special/o/wecaremore/mothersday/"],
  ["TEST-2", "https://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/"],
  ["TEST-3", "https://domenicobrz.github.io/webgl/projects/experiment1/"],
  ["TEST-4", "https://needle.tools/"],
  ["TEST-5", "https://turbulent.ca/"],
  ["TEST-6", "https://vrseat.vercel.app/"],
  ["TEST-7", "http://campoallecomete.it/"],
];
const total = idx_url.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

console.log(START, "to", END)

fs.mkdirSync('output/cap/', { recursive: true });

const evaluate_script_in_all_frames = (page: Page, str: string) => {
  return Promise.allSettled(page.frames().map((frame: Frame) => frame.evaluate(str).catch(() => null)));
}

const wait_for_function_in_all_frames = (page: Page, str: string) => {
  return Promise.allSettled(page.frames().map((frame: Frame) => frame.waitForFunction(str).catch(() => null)));
}

const get_data_in_all_frames = (page: Page, str: string, compressed: boolean) => {
  return Promise.all(
    page.frames().map(async (frame: Frame) => {
      try {
        let data: any = await frame.evaluate(str);
        if (compressed) {
          data = data.map((x: string) => pako.inflate(Buffer.from(x, 'base64'), { to: 'string' }));
          // data = data.map((x: Uint8Array) => pako.inflate(x, { to: 'string' }));
        }
        return {
          name: frame.name(),
          url: frame.url(),
          data,
          error: null,
        };
      } catch (error) {
        return {
          name: frame.name(),
          url: frame.url(),
          data: null, // 或者您可以设置一个默认值
          error,
        };
      }
    })
  );
}

(async () => {
  for (const element of idx_url.slice(START, END)) {
    const idx = element[0];
    const url = element[1];
    console.info(`${START.toString().padStart(5, '0')}/${idx}/${END}  -  ${url}`);
    const gzip_out_path = `output/cap/${idx}.json.gz`;
    const error_out_path = `output/cap/${idx}.error.txt`;
    if (fs.existsSync(gzip_out_path) || fs.existsSync(error_out_path)) {
      console.info(`Skip ${idx} - ${url}`);
    } else {
      const browser = await chromium.launch({
        args: [
          "--enable-gpu",
          "--enable-unsafe-webgpu",
          "--no-sandbox",
        ],
        proxy: {
          server: 'socks5://ss.maghsk.site:3536',
          bypass: 'localhost, 127.0.0.1'
        },
        headless: false,
      });
      try {
        const context = await browser.newContext({ ignoreHTTPSErrors: true });
        await context.addInitScript({ path: 'js/pako.min.js' });
        await context.addInitScript({ path: 'js/inject-tiny.js' });
        await context.addInitScript({ path: 'js/webgl-capture.js' });

        const page = await context.newPage();
        const date = Date.now();
        const start_time_hp = performance.now();

        await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
          .then(() => evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - OK');"))
          .catch(() => evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - ERROR (TIMEOUT?)');"))
          .catch(() => null);

        const net_idle_time_hp = performance.now();
        const net_idle_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", false);

        await page.waitForTimeout(15_000);
        await evaluate_script_in_all_frames(page, "HydWebGLCapture.stopAll();");
        await wait_for_function_in_all_frames(page, "HydWebGLCapture.allStopped();");

        const gl_cap_time_hp = performance.now();
        await evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('gl_cap');");
        const gl_cap_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", false);
        const decoder = new TextDecoder();
        const gl_captures = await get_data_in_all_frames(page, "HydWebGLCapture.generateAll();", true);

        const data = {
          url,
          date,
          events_time_hp: {
            start_time_hp,
            net_idle_time_hp,
            gl_cap_time_hp,
          },
          frame: {
            net_idle_counters,
            gl_cap_counters,
            gl_captures,
          }
        }
        const compressedData = zlib.gzipSync(JSON.stringify(data))
        fs.writeFileSync(gzip_out_path, compressedData);

        // await page.waitForEvent("close", {timeout: 3600_000})

        await context.close();
      } catch (error: any) {
        console.error(`Error ${idx} - ${url}`);
        if (error instanceof Error) {
          fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
        }
      }
      await browser.close();
    }
  }
})();

