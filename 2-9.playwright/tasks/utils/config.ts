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
//   ["TEST-9", "https://gameofphones.rfl.dev"],
//   ["TEST-10", "https://sandcastle.cesium.com/"], // webworker.
//   ["TEST-11", "https://sandcastle.cesium.com/standalone.html#c=bY9Pa8MwDMW/ivGpgyGx6+qGQq+FHQY7+eI6Wmuq2MFSUtJPvyS9jK26vaf3059YsqgZE92omp3JdDMHkjR08LV6G2/jqg8la0iZqrcvW5/tq3WiE1Pjs1lrn7q+VDVD5Q0AKnU9ByXB0xCvpBBFFnCJOvyNujaNJrW7J5tM5CAyd74H5s90J28bh3P+H8oltCmfP0aqHKYldnlrjg8TABzO8jmppfAp1D+T5/8uqr28I0rIbQyiTPA4EGLp8ByYqU74Aw"], //Webworker
//   ["TEST-12", "http://kripken.github.io/webgl-worker/playcanvas/simple-worker.html"],
//   ["TEST-13", "https://sitnik.ru/en/"],
//   ["TEST-14", "https://devnook.github.io/OffscreenCanvasDemo/keep-ui-responsive.html"], // offscreencanvas
//   ["TEST-15", "https://devnook.github.io/OffscreenCanvasDemo/use-with-lib.html"], // offscreencanvas
//   ["TEST-16", "https://threejs.org/examples/webgl_worker_offscreencanvas.html"], // offscreencanvas
//   ["TEST-17", "https://codepen.io/Murugan1982/pen/WNojEXP"], // offscreencanvas
// ];
// export const indexUrls = [
//   ["HYD-0", "http://127.0.0.1:8000/test1/webgl/easy"],
//   ["HYD-1", "http://127.0.0.1:8000/test2/webgl"],
//   ["HYD-2", "http://127.0.0.1:8000/test3/webgl/easy"],
//   ["HYD-3", "http://localhost:8000/"],
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

const launchOptions: LaunchOptionsDict = {};

export function getLaunchOptions(name: string): LaunchOptions {
  let launchOption = launchOptions[name] || {
    headless: headless,
    args: [
      "--enable-gpu",
      "--no-sandbox",
    ],
  };
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
  'socks5://162.105.175.55:13837',
  // 'socks5://162.105.175.55:10701',
  'socks5://162.105.175.55:10702',
  'socks5://162.105.175.55:10703',
  'socks5://162.105.175.55:10704',
  'socks5://162.105.175.55:10705',
  'socks5://162.105.175.55:10706',
];