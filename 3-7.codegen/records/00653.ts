import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://eeerik.com/');
  await page.locator('#virtualVandal-icon').click();
  await page.locator('#anaesterizer-icon').click();
  await page.locator('#drummer-icon').click();
  await page.locator('#meme-icon').click();
  await page.locator('#meme-icon').click();
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 443,
      y: 218
    }
  });
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 387,
      y: 131
    }
  });
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 459,
      y: 300
    }
  });
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 395,
      y: 259
    }
  });
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 320,
      y: 249
    }
  });
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 384,
      y: 185
    }
  });
});