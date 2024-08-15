import * as fs from 'fs';
import * as path from 'path';


const ID_LIST = ['0_glgpu_2408', '0_webgl_2408', '0_webgpu_2408'];
const ID = ID_LIST[2];
const filePath = path.join(__dirname, `../../urls/${ID}.txt`);

function readUrlsFromFile(filePath: string): string[] {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data.split('\n').filter(url => url.trim() !== '');
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

function generateIndexUrls(urls: string[]): [string, string][] {
    return urls.map((url, index) => [`${ID}-${index}`, url]);
}

const urls = readUrlsFromFile(filePath);
export const indexUrls = generateIndexUrls(urls);

// console.log('export const indexUrls =', JSON.stringify(indexUrls, null, 4));