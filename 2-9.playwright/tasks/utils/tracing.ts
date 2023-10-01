import { CDPSession } from "playwright";
import { myStartParameters, simpleParameters } from './config';

export async function sleepHyd(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function traceHyd(client: CDPSession, duration: number): Promise<Buffer> {
    let ret: Buffer | null = null;
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
        ret = Buffer.concat(chunks);
    });
    await client.send('Tracing.start', simpleParameters);
    console.debug('Tracing.start');

    await sleepHyd(duration);
    await client.send('Tracing.end');
    console.debug('Tracing.end');
    while (!ret) {
        await sleepHyd(1_000);
    }
    return ret;
}