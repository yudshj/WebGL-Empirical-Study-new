import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.reliefmaps.io/');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5500000,0,0');
  await page.locator('#unity-canvas').click({
    position: {
      x: 741,
      y: 582
    }
  });
  await page.goto('https://app.reliefmaps.io/#46.16791,3.004616,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.15398,3.309203,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.15399,3.310599,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.05746,3.505734,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.05308,3.615751,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.95721,3.811166,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.85782,4.115383,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.77073,4.119028,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.6723,4.421647,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.48838,4.719506,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.39838,4.829762,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.21627,5.126144,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#45.03219,5.528876,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#44.85534,5.732148,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#44.59394,5.929988,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#44.32924,6.331532,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#44.23776,6.641096,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.89397,6.927426,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.63621,7.232235,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.54717,7.537722,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.37989,7.535755,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.293,7.73728,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.293,7.74159,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.12478,7.833348,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.12341,7.939376,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#43.12326,7.939412,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.95567,8.031384,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.86993,8.231826,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.78575,8.330542,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.61869,8.426407,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.4491,8.81885,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#42.19907,9.110966,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.94907,9.502992,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.94895,9.510073,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.8663,9.605535,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78376,9.703312,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78368,9.705428,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78369,9.705454,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78351,9.7054,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78367,9.705443,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78355,9.705436,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78363,9.705417,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78371,9.705463,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78377,9.705436,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.7836,9.705443,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78376,9.705476,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#41.78362,9.705418,0,0,5500000,0,0');
  await page.locator('#unity-canvas').click({
    position: {
      x: 662,
      y: 446
    }
  });
  await page.goto('https://app.reliefmaps.io/#41.78361,9.705455,0,0,4972000,0,0');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});