import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gamesfashionarchive.net/viewer/');
  await page.locator('#title-list').getByText('Genshin Impact').click();
  await page.getByRole('listitem').filter({ hasText: 'Lumine' }).getByRole('img').click();
  await page.locator('#model-list-items').getByText('Aether').click();
});