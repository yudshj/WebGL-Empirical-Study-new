import { Frame, Page, chromium } from 'playwright';
import * as fs from 'fs';
import * as zlib from "zlib";


// const idx_url: string[][] = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));
// const idx_url = [
//   ["TEST-0", "https://www.babylonjs.com/demos/sponza/"],
//   ["TEST-1", "https://www.pola.co.jp/special/o/wecaremore/mothersday/"],
//   ["TEST-2", "https://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/"],
//   ["TEST-3", "https://domenicobrz.github.io/webgl/projects/experiment1/"],
//   ["TEST-4", "https://needle.tools/"],
//   ["TEST-5", "https://turbulent.ca/"],
//   ["TEST-6", "https://vrseat.vercel.app/"],
//   ["TEST-7", "http://campoallecomete.it/"],
// ];
const idx_url = [
  ["BUG-0", "https://pt.gamcore.com/jogos/brothel_empire_unity_version"],
  ["BUG-1", "https://www.bingoaloha.com/"],
  ["BUG-2", "https://www.miuraz.com.tw/"],
  ["BUG-3", "https://automotive.products.constellium.com/"],
  ["BUG-4", "https://app.austrianskigame.com/game/"],
  ["BUG-5", "http://gym-drimou.thess.sch.gr/"],
  ["BUG-6", "https://www.ggpschas.org/"],
  ["BUG-7", "https://www.vocedivulga.com/carrega-troca-links.php?id=782&_xafvr=ZTNkMWE2MjlhMThjNzQ2M2JlYjgyMDk5OTBhMGU3YTE1Y2ZhMDE1ZCw2NDQ4OWE1YjEzODBk"],
];
const total = idx_url.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);
const PART_SIZE = Math.ceil(total / TOTAL_PART);
const START = PART * PART_SIZE;
const END = Math.min((PART + 1) * PART_SIZE, total);

console.info(START, "to", END)

fs.mkdirSync('output/cap/', { recursive: true });

const rejectOnTimeout = (delay: number) => new Promise((_, reject) => {
  setTimeout(reject, delay, new Error("rejectOnTimeout"));
});


const evaluate_script_in_all_frames = (page: Page, str: string, timeout: number) => {
  console.info(`* evaluate_script_in_all_frames(${str});`);
  return Promise.allSettled(page.frames().map((frame: Frame) => Promise.race([frame.evaluate(str), rejectOnTimeout(timeout)]).catch(() => null)));
}

const wait_for_function_in_all_frames = (page: Page, str: string, timeout: number) => {
  console.info(`* wait_for_function_in_all_frames(${str});`);
  return Promise.allSettled(page.frames().map((frame: Frame) => Promise.race([frame.waitForFunction(str), rejectOnTimeout(timeout)]).catch(() => null)));
}

const get_data_in_all_frames = (page: Page, str: string, timeout: number) => {
  console.info(`* GET_DATA_IN_ALL_FRAMES(${str});`);
  const promises = page.frames().map((frame: Frame) => {
    return Promise.race([frame.evaluate(str), rejectOnTimeout(timeout)])
      .then((data) => {
        return {
          name: frame.name(),
          url: frame.url(),
          data: data,
          error: null,
        };
      })
      .catch((error) => {
        return {
          name: frame.name(),
          url: frame.url(),
          data: null,
          error: error,
        };
      });
  });

  return Promise.allSettled(promises);
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
        console.info('launch browser')
        const context = await browser.newContext({ ignoreHTTPSErrors: true });
        await context.addInitScript({ path: 'js/inject-tiny.js' });
        await context.addInitScript({ path: 'js/webgl-capture.js' });

        const page = await context.newPage();
        const date = Date.now();
        const start_time_hp = performance.now();

        console.info('goto');
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
          .then(() => evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - OK');", 10_000))
          .catch(() => evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('net_idle - ERROR (TIMEOUT?)');", 10_000))
          .catch(() => null);
        
        console.info('net idle');
        const net_idle_time_hp = performance.now();
        const net_idle_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);

        await page.waitForTimeout(15_000);

        console.info('stop')
        await evaluate_script_in_all_frames(page, "HydWebGLCapture.stopAll();", 10_000);
        await wait_for_function_in_all_frames(page, "HydWebGLCapture.allStopped();", 10_000);
        
        console.info('capture');
        const gl_cap_time_hp = performance.now();
        await evaluate_script_in_all_frames(page, "HydWebGLCapture.debugInfoAll('gl_cap');", 10_000);
        const gl_cap_counters = await get_data_in_all_frames(page, "window.hydGetCounters();", 10_000);
        const gl_captures = await get_data_in_all_frames(page, "HydWebGLCapture.generateAll();", 30_000);

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

