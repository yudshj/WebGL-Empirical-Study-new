import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://kocho-land-senki.sakura.ne.jp/');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 425,
      y: 419
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 751,
      y: 375
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 309,
      y: 534
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 407,
      y: 573
    }
  });
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 596,
      y: 549
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 612,
      y: 550
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 379,
      y: 555
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 369,
      y: 537
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 620,
      y: 555
    }
  });
  await page.locator('#UpperCanvas').dblclick({
    position: {
      x: 615,
      y: 552
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 615,
      y: 552
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 642,
      y: 373
    }
  });
});