import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.reliefmaps.io/');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5500000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6028000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6606688,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7240930,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7936060,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,8000000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7232000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6537728,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5910106,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6477476,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7099314,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7780848,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,8000000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,7232000,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6537728,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5282484,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5789603,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,6345405,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5736246,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,5185566,0,0');
  await page.goto('https://app.reliefmaps.io/#46.19228,2.5,0,0,4687752,0,0');
  await page.locator('#unity-canvas').click({
    position: {
      x: 771,
      y: 578
    }
  });
});