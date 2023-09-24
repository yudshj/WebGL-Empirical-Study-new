import { chromium } from 'playwright';
import * as fs from 'fs';
import { evaluate_script_in_all_frames, wait_for_function_in_all_frames, get_data_in_all_frames } from './utils/utils';
import { contextOptions, indexUrls, getLaunchOptions, myStartParameters } from './utils/config';
import { manual } from './utils/manual';
import { checkGpu } from './utils/check';

const NAME = 'performance';

const total = indexUrls.length;

const PART = parseInt(process.argv[2]);
const TOTAL_PART = parseInt(process.argv[3]);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });

(async () => {
    const browser = await chromium.launch(getLaunchOptions(NAME));
    await checkGpu(browser);
    console.log("GPU acceleration is enabled");
    await browser.close();

    for (let i = PART; i < total; i += TOTAL_PART) {
        const [idx, url] = indexUrls[i];
        // log date in hh:mm:ss
        console.info(new Date().toLocaleString(), `${i} -  ${url}`);
        const proto_gz_out_path = `output/${NAME}/${idx}.proto.gz`;
        const error_out_path = `output/${NAME}/${idx}.error.txt`;
        const manual_interaction = idx in manual;
        let manual_interaction_failed = false;

        if (fs.existsSync(proto_gz_out_path) || fs.existsSync(error_out_path)) {
            console.info(`Skip ${idx}`);
            continue;
        }
        // if (!manual_interaction) { continue; }
        
        const browser = await chromium.launch(getLaunchOptions(NAME));
        const client = await browser.newBrowserCDPSession();
    
        try {
            const browserContext = await browser.newContext(contextOptions);
            // if (fs.existsSync(har_path)) {
            //     browserContext.routeFromHAR(har_path, { notFound: "fallback" });
            // }
            await browserContext.addInitScript({ path: 'js/spector.bundle.js' });
            await browserContext.addInitScript({ path: 'js/hydpako.min.js' });
            await browserContext.addInitScript({ path: 'js/inject-spector.js' });

            const page = await browserContext.newPage();
            const date = Date.now();

            let netIdleTimeout = -1;
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 }).catch(() => null);
            await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => null);
            console.log("network idle 1");
            for (let i = 0; i < 4; i++) {
                await page.mouse.wheel(0, 512).catch(() => null);
            }

            await page.waitForTimeout(1000);

            for (let i = 0; i < 4; i++) {
                await page.mouse.wheel(0, -512).catch(() => null);
            }

            if (manual_interaction) {
                await manual[idx](page).catch(() => null);
            }

            await page.waitForLoadState('networkidle', { timeout: 60_000 })
                .then(() => { netIdleTimeout = 0; })
                .catch(() => { netIdleTimeout = 1; })
                .catch(() => null);

            console.log("network idle 2");
            console.log("wait for 10 seconds");
                
            await page.waitForTimeout(10_000);
            
            let done = false;
            client.once('Tracing.tracingComplete', async (event) => {
                console.debug('tracingComplete event received');
                const chunks: Buffer[] = [];
                while (true) {
                    const streamData = await client.send('IO.read', { handle: event.stream! });
                    if (streamData.eof) {
                        break;
                    }
                    if (!streamData.base64Encoded) {
                        throw new Error('Received data is not base64 encoded');
                    }
                    chunks.push(Buffer.from(streamData.data, 'base64'));
                }
                fs.writeFileSync(proto_gz_out_path, Buffer.concat(chunks));
                done = true;
            });
            await client.send('Tracing.start', myStartParameters);
            console.debug('Tracing.start');
            // await page.waitForFunction('window.captureDone', null, { timeout: 60_000 }).catch(() => {
            //     console.warn('captureDone timeout')
            // });
            // console.log(await page.evaluate('window.captureDone'));
            await page.waitForTimeout(10_000);
            await client.send('Tracing.end');
            console.debug('Tracing.end');
            while (!done) {
                await page.waitForTimeout(500);
            }

            // const data = {
            //     url,
            //     idx,
            //     date,
            //     netIdleTimeout,
            //     manual_interaction,
            //     manual_interaction_failed,
            //     proto_gz_out_path,
            // };
            // // await page.waitForTimeout(3600_000);

            // fs.writeFileSync(json_out_path, JSON.stringify(data));

            await browserContext.close();
        }
        catch (error: any) {
            console.error(error);
            if (error instanceof Error) {
                fs.writeFileSync(error_out_path, [error.name, error.message, error.stack].join('\n++++++++++\n'));
            }
        }
    
        await browser.close();
    }
})();