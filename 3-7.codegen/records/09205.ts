import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gamesfashionarchive.net/viewer/');
  await page.getByRole('listitem').filter({ hasText: 'Genshin Impact' }).getByRole('img').click();
  await page.getByRole('listitem').filter({ hasText: 'Kaeya' }).getByRole('img').click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.locator('#renderCanvas').click({
    position: {
      x: 530,
      y: 201
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 685,
      y: 238
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 713,
      y: 241
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 735,
      y: 238
    }
  });
});