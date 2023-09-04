import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.gneexpo.net/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[id="c"]').click({
    position: {
      x: 521,
      y: 114
    }
  });
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.locator('[id="c"]').click({
    position: {
      x: 1023,
      y: 187
    }
  });
  const page2 = await page2Promise;
});