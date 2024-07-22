// import * as fs from 'fs';
import { LaunchOptions, BrowserContextOptions } from 'playwright';
import { Protocol } from 'playwright-core/types/protocol';

import { tranco } from './tranco';
import { gallery } from './gallery';

interface LaunchOptionsDict {
  [key: string]: LaunchOptions;
}

const useProxy = false;
const headless = true;

export const indexUrls = [
  ["HYD-0", "https://yudshj.synology.me/boat/"]
]
// tranco;

const launchOptions: LaunchOptionsDict = {};

export function getLaunchOptions(name: string): LaunchOptions {
  let launchOption = launchOptions[name] || {
    headless: headless,
    args: [
      // "--no-sandbox",
      // '--disable-dev-shm-usage',
      // '--memory-pressure-off',
      // '--max-old-space-size=8192',
      // '--js-flags="--max_old_space_size=8192"',
      // '--ignore-certificate-errors',
      // "--enable-gpu",
      // "--use-gl=angle",
      // '--force-gpu-rasterization',
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
  'socks5://127.0.0.1:11632',
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
