import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { randomInt } from 'crypto';

const proxyPool = [
    'socks5://ss.maghsk.site:3539',
    'socks5://ss.maghsk.site:3536',
    'socks5://ss.maghsk.site:3535',
    'socks5://162.105.175.55:13837',
    // 'socks5://162.105.175.55:10701',
    'socks5://162.105.175.55:10702',
    'socks5://162.105.175.55:10703',
    'socks5://162.105.175.55:10704',
    'socks5://162.105.175.55:10705',
    'socks5://162.105.175.55:10706',
];

(async () => {
    let json_string = fs.readFileSync('0512-df_label-raf-need_interactions.json', 'utf8');
    let json = JSON.parse(json_string);

    for (const [idx, url] of json) {
        const proxy = proxyPool[randomInt(0, proxyPool.length)];
        const ts_path = `./records/${idx}.ts`;
        if (fs.existsSync(ts_path)) {
            console.log(`skip ${idx}`);
            continue;
        }
        // const har_path = `./har/${idx}.zip`;
        const cmd = `npx playwright codegen --ignore-https-errors ${url} --output ${ts_path} --proxy-server=${proxy}`;
        // const cmd = `npx playwright codegen ${url} --output ${ts_path} --proxy-server=${proxy} --save-har=${har_path}`;
        console.log(cmd);
        execSync(cmd);
    }
})()