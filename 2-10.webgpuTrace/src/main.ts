import * as fs from 'fs';
import { chromium } from 'playwright';
import { getLaunchOptions, contextOptions, myStartParameters } from './utils/config';
import { indexUrls } from './utils/readUrls';

const NAME = 'tracing';

const total = indexUrls.length;

const TOTAL_PART = parseInt(process.argv[2]);
const PART = parseInt(process.argv[3]);
const _start = Math.floor(total / TOTAL_PART) * PART;
const _end = Math.floor(total / TOTAL_PART) * (PART + 1);

console.log(`TOTAL_PART: ${TOTAL_PART}, PART: ${PART}`);
console.log(`total: ${total}, start: ${_start}, end: ${_end}`);

fs.mkdirSync(`output/${NAME}/`, { recursive: true });
async function main() {
    for (let i = _start; i < _end; i++) {
        const [idx, url] = indexUrls[i];
        const proto_gz_out_path = `output/${NAME}/${idx}.proto.gz`;
        if (fs.existsSync(proto_gz_out_path)) {
            console.info(`Skip ${idx} - ${url}`);
        } else {
            const browser = await chromium.launch(getLaunchOptions(NAME));
            const client = await browser.newBrowserCDPSession();
            const context = await browser.newContext(contextOptions);
            const page = await context.newPage();
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 }).catch(() => null);
            console.debug('domcontentloaded');
            await page.waitForLoadState('networkidle', { timeout: 60_000 }).catch(() => null);
            console.debug('networkidle');
            await page.waitForTimeout(1_000);
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
            await page.waitForFunction('window.captureDone', null, { timeout: 30_000 }).catch(() => { console.warn('captureDone timeout') });
            console.log(await page.evaluate('window.captureDone'));
            await client.send('Tracing.end');
            console.debug('Tracing.end');
            while (!done) {
                await page.waitForTimeout(500);
            }
            console.info(`Done ${idx} - ${url}`);
            // await page.waitForEvent("close", { timeout: 3600_000 });
            await context.close();
            await browser.close();
        }
    }
}

main();
