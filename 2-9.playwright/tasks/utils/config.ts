import * as fs from 'fs';
import { LaunchOptions } from 'playwright';

interface LaunchOptionsDict {
  [key: string]: LaunchOptions;
}

const useProxy = true;
const headless = false;

export const indexUrls: string[][] = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));
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
// ];
// export const indexUrls = [
//   ["BUG-0", "https://pt.gamcore.com/jogos/brothel_empire_unity_version"],
//   ["BUG-1", "https://www.bingoaloha.com/"],
//   ["BUG-2", "https://www.miuraz.com.tw/"],
//   ["BUG-3", "https://automotive.products.constellium.com/"],
//   ["BUG-4", "https://app.austrianskigame.com/game/"],
//   ["BUG-5", "http://gym-drimou.thess.sch.gr/"],
//   ["BUG-6", "https://www.ggpschas.org/"],
//   ["BUG-7", "https://www.vocedivulga.com/carrega-troca-links.php?id=782&_xafvr=ZTNkMWE2MjlhMThjNzQ2M2JlYjgyMDk5OTBhMGU3YTE1Y2ZhMDE1ZCw2NDQ4OWE1YjEzODBk"],
// ];

const launchOptions: LaunchOptionsDict = {
  cap: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: headless,
  },
  raf: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: headless,
  },
  simple: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: headless,
  },
  har: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: headless,
  },
  screenshot: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: headless,
  },
  "spector-full": {
    headless: headless,
    args: [
      `--enable-unsafe-webgpu`,
      `--no-sandbox`,
    ],
  },
  "spector-one": {
    headless: headless,
    args: [
      `--enable-unsafe-webgpu`,
      `--no-sandbox`,
    ],
  },
};

export function getLaunchOptions(name: string): LaunchOptions {
  let launchOption = launchOptions[name];
  if (useProxy) {
    launchOption.proxy = {
      server: proxyPool[Math.floor(Math.random() * proxyPool.length)],
      bypass: 'localhost,127.0.0.1'
    };
    console.log(name, " - PROXY: ", launchOption.proxy.server);
  }
  return launchOption;
}


const proxyPool = [
  'socks5://ss.maghsk.site:3539',
  'socks5://ss.maghsk.site:3536',
  'socks5://ss.maghsk.site:3535',
];