import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tsc.orbitsurf.jp/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.frameLocator('div >> internal:has-text=/^Post from RICOH THETA\\. - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Zoom in' }).click();
  await page.frameLocator('div >> internal:has-text=/^Post from RICOH THETA\\. - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Zoom in' }).click();
  await page.frameLocator('div >> internal:has-text=/^Post from RICOH THETA\\. - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Zoom in' }).click();
  await page.frameLocator('div >> internal:has-text=/^Post from RICOH THETA\\. - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Home position' }).click();
  await page.frameLocator('div >> internal:has-text=/^Post from RICOH THETA\\. - Spherical Image - RICOH THETA$/ >> iframe').getByRole('img', { name: 'Zoom out' }).click({
    clickCount: 3
  });
});