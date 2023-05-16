import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/baguette-sprint/ZQFQrRgrvmOImQ');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
});