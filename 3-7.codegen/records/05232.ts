import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/visual-crosswords/JwGOLSD8LODzyQ');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('.grid-container > div:nth-child(5) > div > div').click();
  await page.frameLocator('iframe').locator('.grid-container > div:nth-child(7) > div > div').click();
  await page.frameLocator('iframe').locator('.grid-container > div:nth-child(5) > div > div').click();
  await page.frameLocator('iframe').getByRole('img', { name: 'Yue Minjun - Free and Leisure-10' }).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: 'Free and Leisure-10 Yue Minjun Today Art Museum' }).nth(3).click();
  await page.getByRole('button', { name: 'Quit Game' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Quit Game' }).click();
});