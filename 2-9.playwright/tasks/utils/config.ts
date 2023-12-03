import * as fs from 'fs';
import { LaunchOptions, BrowserContextOptions } from 'playwright';
import { Protocol } from 'playwright-core/types/protocol';

interface LaunchOptionsDict {
  [key: string]: LaunchOptions;
}

const useProxy = false;
const headless = false;

// export const indexUrls: string[][] = JSON.parse(fs.readFileSync('input/0928.json', 'utf8'));
// export const indexUrls: string[][] = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));
// export const indexUrls: string[][] = JSON.parse(fs.readFileSync('input/0512-df_label-raf-need_interactions.json', 'utf8'));
// export const indexUrls = [
//   ["TEST-0", "https://www.babylonjs.com/demos/sponza/"],
//   ["TEST-1", "https://www.pola.co.jp/special/o/wecaremore/mothersday/"],
//   ["TEST-2", "https://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/"],
//   ["TEST-3", "https://domenicobrz.github.io/webgl/projects/experiment1/"],
//   ["TEST-4", "https://needle.tools/"],
//   ["TEST-5", "https://turbulent.ca/"],
//   ["TEST-6", "https://vrseat.vercel.app/"],
//   ["TEST-7", "http://campoallecomete.it/"],
//   ["TEST-8", "http://donbeto.com/menu-restaurante/"],
//   ["TEST-9", "https://gameofphones.rfl.dev"],
//   ["TEST-10", "https://sandcastle.cesium.com/"], // webworker.
//   ["TEST-11", "https://sandcastle.cesium.com/standalone.html#c=bY9Pa8MwDMW/ivGpgyGx6+qGQq+FHQY7+eI6Wmuq2MFSUtJPvyS9jK26vaf3059YsqgZE92omp3JdDMHkjR08LV6G2/jqg8la0iZqrcvW5/tq3WiE1Pjs1lrn7q+VDVD5Q0AKnU9ByXB0xCvpBBFFnCJOvyNujaNJrW7J5tM5CAyd74H5s90J28bh3P+H8oltCmfP0aqHKYldnlrjg8TABzO8jmppfAp1D+T5/8uqr28I0rIbQyiTPA4EGLp8ByYqU74Aw"], //Webworker
//   ["TEST-12", "http://kripken.github.io/webgl-worker/playcanvas/simple-worker.html"],
//   ["TEST-13", "https://sitnik.ru/en/"],
//   ["TEST-14", "https://devnook.github.io/OffscreenCanvasDemo/keep-ui-responsive.html"], // offscreencanvas
//   ["TEST-15", "https://devnook.github.io/OffscreenCanvasDemo/use-with-lib.html"], // offscreencanvas
//   ["TEST-16", "https://threejs.org/examples/webgl_worker_offscreencanvas.html"], // offscreencanvas
//   ["TEST-17", "https://codepen.io/Murugan1982/pen/WNojEXP"], // offscreencanvas
// ];
// export const indexUrls = [
//   ["BENCH-0", "https://webglsamples.org/aquarium/aquarium.html?numFish=30000"],
//   ["BENCH-1", "https://web.basemark.com/run/tests/30/graphics_suite/webgl_102_test/"],
//   ["BENCH-2", "https://pkuhydnas.synology.me/MotionMark-GL/MotionMark/"],
//   ["BENCH-3", "https://pkuhydnas.synology.me/luic/benchmark/cubes.html"],
//   ["BENCH-4", "https://pkuhydnas.synology.me/bmark"],
// ];
// export const indexUrls = [
//   ["GG-0", "https://elisabeth.pointal.org/"],
// ];
export const indexUrls = [
  ["PERF-1", "https://pkuhydnas.synology.me/gl-samples/aquarium/aquarium.html?numFish=11000"],
  ["PERF-0", "https://pkuhydnas.synology.me/MotionMark-GL/MotionMark/"],
];

const launchOptions: LaunchOptionsDict = {};

export function getLaunchOptions(name: string): LaunchOptions {
  let launchOption = launchOptions[name] || {
    headless: headless,
    args: [
      // "--enable-gpu",
      "--no-sandbox",
      '--disable-dev-shm-usage',
      '--memory-pressure-off',
      '--max-old-space-size=8192',
      '--js-flags="--max_old_space_size=8192"',
      '--ignore-certificate-errors',
      "--enable-gpu",
      "--use-gl=angle",
      // '--force-gpu-rasterization',
    ],
  };
  if (useProxy) {
    launchOption.proxy = {
      server: proxyPool[Math.floor(Math.random() * proxyPool.length)],
      bypass: 'localhost,127.0.0.1,pkuhydnas.synology.me,*.pku.edu.cn'
    };
    console.log(name, " - PROXY: ", launchOption.proxy.server);
  }
  return launchOption;
}


const proxyPool = [
  // 'socks5://ss.maghsk.site:3539',
  // 'socks5://ss.maghsk.site:3535',
  'socks5://162.105.175.55:10701',
  'socks5://162.105.175.55:13838',
  'socks5://162.105.175.55:13839',
];

export const contextOptions: BrowserContextOptions = { locale: 'en-US', ignoreHTTPSErrors: true, permissions: ['camera', 'microphone'] };

export const myStartParameters: Protocol.Tracing.startParameters = {
  transferMode: "ReturnAsStream",
  streamCompression: "gzip",
  streamFormat: "proto",
  traceConfig: {
    recordMode: "recordAsMuchAsPossible",
    enableSampling: true,
    enableSystrace: false,
    traceBufferSizeInKb: 2097152,
    memoryDumpConfig: {
      // @ts-ignore
      allowed_dump_modes: [
        "background",
        "light",
        "detailed"
      ],
      // @ts-ignore
      triggers: [
        {
          "min_time_between_dumps_ms": 500,
          "mode": "detailed",
          "type": "periodic_interval"
        }
      ]
    },
    includedCategories: [
      "base",
      "benchmark",
      "blink",
      "browser",
      "cc",
      // "cpu_profiler",
      "devtools",
      "devtools.contrast",
      "devtools.timeline",
      // "disabled-by-default-cpu_profiler",
      "disabled-by-default-devtools.timeline",
      "disabled-by-default-devtools.timeline.frame",
      "disabled-by-default-gpu_cmd_queue",
      "disabled-by-default-gpu.dawn",
      // "disabled-by-default-gpu.decoder",
      "disabled-by-default-gpu.device",
      "disabled-by-default-gpu.service",
      // "disabled-by-default-ipc.flow",
      // "disabled-by-default-memory-infra",
      // "disabled-by-default-memory-infra.v8.code_stats",
      // "disabled-by-default-mojom",
      // "disabled-by-default-toplevel.flow",
      // "disabled-by-default-toplevel.ipc",
      // "disabled-by-default-v8.cpu_profiler",
      "gpu.angle",
      "gpu",
      "gpu.capture",
      // "ipc",
      // "memory",
      // "mojom",
      // "navigation",
      "native",
      // "net",
      // "netlog",
      // "scheduler",
      // "sequence_manager",
      // "toplevel.flow",
      "toplevel",
      "ui",
      // "v8.execute",
      // "v8.wasm",
      // "v8",
      "views",
      "viz",
    ],
    excludedCategories: [
      "*"
    ],
  }
};
export const simpleParameters: Protocol.Tracing.startParameters = {
  transferMode: "ReturnAsStream",
  streamCompression: "gzip",
  streamFormat: "proto",
  traceConfig: {
    includedCategories: [
      "base",
      "benchmark",
      "blink",
      "browser",
      "cc",
      // "cpu_profiler",
      "devtools",
      "devtools.contrast",
      "devtools.timeline",
      // "disabled-by-default-cpu_profiler",
      "disabled-by-default-devtools.timeline",
      "disabled-by-default-devtools.timeline.frame",
      "disabled-by-default-gpu_cmd_queue",
      "disabled-by-default-gpu.dawn",
      // "disabled-by-default-gpu.decoder",
      "disabled-by-default-gpu.device",
      "disabled-by-default-gpu.service",
      // "disabled-by-default-ipc.flow",
      // "disabled-by-default-memory-infra",
      // "disabled-by-default-memory-infra.v8.code_stats",
      // "disabled-by-default-mojom",
      // "disabled-by-default-toplevel.flow",
      // "disabled-by-default-toplevel.ipc",
      // "disabled-by-default-v8.cpu_profiler",
      "gpu.angle",
      "gpu",
      "gpu.capture",
      // "ipc",
      // "memory",
      // "mojom",
      // "navigation",
      "native",
      // "net",
      // "netlog",
      // "scheduler",
      // "sequence_manager",
      // "toplevel.flow",
      "toplevel",
      "ui",
      // "v8.execute",
      // "v8.wasm",
      // "v8",
      // "views",
      // "viz",
    ],
    excludedCategories: [
      "*"
    ],
  }
};
