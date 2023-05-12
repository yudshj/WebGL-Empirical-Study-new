import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://discover.martell.com/chs-ww');
  await page.getByRole('link', { name: '进入' }).click();
  await page.getByPlaceholder('出生年份').click();
  await page.getByPlaceholder('出生年份').fill('1800');
  await page.getByRole('link', { name: '进入' }).click();
  await page.getByRole('link', { name: '在VR虚拟现实中探索' }).click();
  await page.locator('canvas').click({
    position: {
      x: 576,
      y: 326
    }
  });
});