import fs from 'fs';
import path from 'path';

import { LaunchOptions, BrowserContextOptions } from 'playwright';
import { Protocol } from 'playwright-core/types/protocol';

// import { tranco } from './tranco';
// import { gallery } from './gallery';

interface LaunchOptionsDict {
  [key: string]: LaunchOptions;
}

const useProxy = false;
const headless = true;

// tranco;
// read indexUrls from 'gallery.json'

const filePath = './' + process.argv[2] + '.json';
export const indexUrls = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath), 'utf8'))

console.log('indexUrls:', indexUrls);

const launchOptions: LaunchOptionsDict = {};

export function getLaunchOptions(name: string): LaunchOptions {
  let launchOption = launchOptions[name] || {
    headless: headless,
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      // "--enable-feature=Vulkan",
    ],
  };
  if (useProxy) {
    launchOption.proxy = {
      server: proxyPool[Math.floor(Math.random() * proxyPool.length)],
      bypass: 'localhost,127.0.0.1,100.*,10.*,162.*,yudshj.synology.me,*.pku.edu.cn'
    };
    console.log(name, " - PROXY: ", launchOption.proxy.server);
  }
  return launchOption;
}


const proxyPool = [
  'http://162.105.175.55:11632',
];

export const contextOptions: BrowserContextOptions = {
  locale: 'en-US',
  ignoreHTTPSErrors: true,
  permissions: ['camera', 'microphone'],
  viewport: {
    width: 1920,
    height: 1080,
  },
};

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
