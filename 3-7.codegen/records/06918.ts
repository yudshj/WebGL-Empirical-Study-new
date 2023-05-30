import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://coastalworld.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Enter Start the journey' }).click();
  await page.locator('canvas').nth(3).click({
    position: {
      x: 420,
      y: 222
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 624,
      y: 322
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 624,
      y: 310
    }
  });
  await page.getByRole('button', { name: 'Let\'s do it!' }).click();
  await page.locator('canvas').nth(3).click({
    position: {
      x: 654,
      y: 262
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 654,
      y: 262
    }
  });
  await page.getByRole('button', { name: 'Close' }).nth(1).click();
  await page.locator('canvas').nth(3).click({
    position: {
      x: 632,
      y: 275
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 622,
      y: 169
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 682,
      y: 294
    }
  });
  await page.locator('canvas').nth(3).click({
    position: {
      x: 563,
      y: 342
    }
  });
  await page.locator('body').press('ArrowUp', {delay: 1000});
  await page.locator('body').press('ArrowUp', {delay: 1000});
  await page.locator('body').press('w', {delay: 1000});
  await page.locator('body').press('w', {delay: 1000});
});