import { LaunchOptions, BrowserContextOptions } from 'playwright';
import { Protocol } from 'playwright-core/types/protocol';

const USEPROXY = true;
const HEADLESS = false;


interface LaunchOptionsDict {
    [key: string]: LaunchOptions;
}

const launchOptions: LaunchOptionsDict = {
    "tracing": {
        headless: HEADLESS,
        args: [
            // '--disable-gpu-sandbox',
            // '--disable-infobars',
            // '--no-sandbox',
            '--no-default-browser-check',
            '--no-first-run',
            // '--ignore-certificate-errors',
            // '--disable-dev-shm-usage',
            '--memory-pressure-off',
            // '--max-old-space-size=8192',
            '--enable-unsafe-webgpu',
            // 'enable-gpu-service-tracing',
            // 'enable-gpu-client-tracing',
        ],
    }
};

export function getLaunchOptions(name: string): LaunchOptions {
    let launchOption: LaunchOptions = launchOptions[name];
    if (USEPROXY) {
        launchOption.proxy = {
            server: proxyPool[Math.floor(Math.random() * proxyPool.length)],
            bypass: 'localhost,127.0.0.1'
        };
        console.log(name, " - PROXY: ", launchOption.proxy.server);
    }
    return launchOption;
};
const proxyPool = [
    'http://100.64.0.55:22011',
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
            "cc",
            "cpu_profiler",
            "devtools.contrast",
            "devtools.timeline",
            "devtools",
            // "disabled-by-default-cpu_profiler.debug",
            "disabled-by-default-cpu_profiler",
            "disabled-by-default-devtools.timeline.frame",
            "disabled-by-default-devtools.timeline",
            "disabled-by-default-gpu_cmd_queue",
            "disabled-by-default-gpu.dawn",
            "disabled-by-default-gpu.device",
            "disabled-by-default-gpu.service",
            "disabled-by-default-ipc.flow",
            "disabled-by-default-memory-infra",
            "disabled-by-default-mojom",
            "disabled-by-default-paint-worklet",
            "disabled-by-default-toplevel.flow",
            "disabled-by-default-toplevel.ipc",
            "disabled-by-default-v8.cpu_profiler",
            "disabled-by-default-webgpu",
            "gpu.angle",
            "gpu.capture",
            "gpu",
            "ipc",
            "loading",
            "memory",
            "mojom",
            "native",
            "scheduler",
            "toplevel.flow",
            "toplevel",
            "ui",
            "v8.execute",
            "v8.wasm",
            "v8",
            "views",
            "viz",
        ],
        excludedCategories: [
            "*"
        ],
    }
};
