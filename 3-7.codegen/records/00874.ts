import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://gneexpo.net/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[id="c"]').click({
    position: {
      x: 583,
      y: 235
    }
  });
  const page1 = await page1Promise;
});