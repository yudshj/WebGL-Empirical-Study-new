import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://codepen.io/teropa/pen/JLjXGK');
  await page.frameLocator('iframe[name="CodePen"]').getByText('play_arrow pause').click();
});