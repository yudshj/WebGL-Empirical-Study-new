import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { randomInt } from 'crypto';
import shuffle from '@stdlib/random-shuffle';

const proxyPool = [
    'socks5://162.105.175.55:10701',
    'socks5://162.105.175.55:13838',
    'socks5://162.105.175.55:13839',
];

(async () => {
    let json_string = fs.readFileSync('0531-df_label-raf-need_interactions.json', 'utf8');
    let json = Array.from(shuffle(JSON.parse(json_string)));
    // let json = JSON.parse(json_string);

    for (const [idx, url] of json) {
        const proxy = proxyPool[randomInt(0, proxyPool.length)];
        const ts_path = `./records/${idx}.ts`;
        if (fs.existsSync(ts_path)) {
            console.log(`skip ${idx}`);
            continue;
        }
        // const har_path = `./har/${idx}.zip`;
        const cmd = `npx playwright codegen --lang en-US --ignore-https-errors ${url} --output ${ts_path} --proxy-server=${proxy}`;
        // const cmd = `npx playwright codegen ${url} --output ${ts_path} --proxy-server=${proxy} --save-har=${har_path}`;
        console.log(cmd);
        try {
            execSync(cmd);
        } catch (e) {
            // touch file
            // fs.writeFileSync(ts_path, '');
        }
    }
})()