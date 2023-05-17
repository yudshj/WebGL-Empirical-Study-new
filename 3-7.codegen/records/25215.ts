import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/');
  await page.getByRole('button', { name: 'High' }).click();
  await page.goto('https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/#opening');
});