import * as fs from 'fs';

// export const indexUrls: string[][] = JSON.parse(fs.readFileSync('input/0422.json', 'utf8'));
export const indexUrls = [
  ["TEST-0", "https://www.babylonjs.com/demos/sponza/"],
  ["TEST-1", "https://www.pola.co.jp/special/o/wecaremore/mothersday/"],
  ["TEST-2", "https://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/"],
  ["TEST-3", "https://domenicobrz.github.io/webgl/projects/experiment1/"],
  ["TEST-4", "https://needle.tools/"],
  ["TEST-5", "https://turbulent.ca/"],
  ["TEST-6", "https://vrseat.vercel.app/"],
  ["TEST-7", "http://campoallecomete.it/"],
];
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

export const launchOptions = {
  cap: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    proxy: {
      server: 'socks5://ss.maghsk.site:3539',
      bypass: 'localhost, 127.0.0.1'
    },
    headless: false,
  },
  raf: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    proxy: {
      server: 'socks5://ss.maghsk.site:3536',
      bypass: 'localhost, 127.0.0.1'
    },
    headless: true,
  },
  simple: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    proxy: {
      server: 'socks5://ss.maghsk.site:3535',
      bypass: 'localhost, 127.0.0.1'
    },
    headless: true,
  },
  har: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: true,
  },
  screenshot: {
    args: [
      "--enable-gpu",
      "--enable-unsafe-webgpu",
      "--no-sandbox",
    ],
    headless: true,
  }
};
