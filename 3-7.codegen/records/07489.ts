import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://david.li/filtering/');
  await page.getByText('Next Image').click();
  await page.getByText('Next Image').click();
  await page.locator('#editor').click({
    position: {
      x: 469,
      y: 72
    }
  });
  await page.locator('#editor').click({
    position: {
      x: 487,
      y: 48
    }
  });
  await page.locator('#editor').click({
    position: {
      x: 508,
      y: 55
    }
  });
  await page.getByText('Next Image').click();
  await page.getByText('Next Image').click();
});