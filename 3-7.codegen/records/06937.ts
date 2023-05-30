import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/teropa/pen/QxLrMp');
  await page.frameLocator('iframe[name="CodePen"]').getByRole('button', { name: 'Start' }).click();
});