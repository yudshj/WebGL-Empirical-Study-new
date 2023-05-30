import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.mudgate.com/');
  await page.goto('https://www.mudgate.com/index.htm');
  await page.locator('#signUp').click();
  await page.getByPlaceholder('Name').fill('aaaa888');
  await page.locator('#mg_racetype').selectOption('elf');
  await page.getByTitle('Shield Knight').click();
  await page.locator('#mg_content_container a').filter({ hasText: 'Play now' }).click();
  await page.locator('#mapcontainer').click({
    position: {
      x: 718,
      y: 461
    }
  });
  await page.keyboard.press('w', { delay: 1000 });
  await page.keyboard.press('d', { delay: 1000 });
});