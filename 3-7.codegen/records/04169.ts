import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://2020.laphase5.com/');
  await page.goto('https://2020.laphase5.com/histoire');
  await page.getByRole('button', { name: 'Explorer le navire' }).click();
});