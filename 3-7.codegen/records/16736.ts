import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://team3d.io/');
  await page.getByText('Start', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#uniswap-button-wrapper #uniswap_button').click();
  const page1 = await page1Promise;
  await page.locator('#wolf3d_button').dblclick();
  await page.locator('#jsdos').click({
    position: {
      x: 382,
      y: 214
    }
  });
  await page.locator('#jsdos').click({
    position: {
      x: 326,
      y: 210
    }
  });
  await page.locator('body').press('Control+s');
  await page.locator('#jsdos').click({
    position: {
      x: 509,
      y: 244
    }
  });
  await page.locator('body').press('Control+s');
  await page.locator('body').press('Control+a');
  await page.locator('body').press('Control+a');
  await page.locator('body').press('Control+a');
  await page.locator('body').press('Control+a');
  await page.locator('body').press('Control+s');
  await page.locator('#jsdos').click({
    position: {
      x: 390,
      y: 143
    }
  });
  await page.locator('body').press('Control+d');
  await page.locator('body').press('Control+d');
  await page.locator('#jsdos').click({
    position: {
      x: 390,
      y: 143
    }
  });
  await page.locator('#jsdos').click({
    position: {
      x: 390,
      y: 143
    }
  });
  await page.locator('body').press('Control+d');
  await page.locator('body').press('Control+d');
  await page.locator('body').press('Control+d');
  await page.locator('body').press('Control+d');
  await page.locator('body').press('Control+s');
  await page.locator('body').press('Control+s');
  await page.locator('body').press('Control+a');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowLeft');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('Shift+ArrowLeft');
  await page.locator('body').press('Shift+ArrowRight');
  await page.locator('body').press('ArrowLeft');
});