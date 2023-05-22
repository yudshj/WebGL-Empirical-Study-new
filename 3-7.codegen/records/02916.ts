import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.heroforge.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.locator('.label-0-2-209 > img:nth-child(3)').first().click();
  await page.locator('div:nth-child(2) > .label-0-2-209 > img:nth-child(3)').click();
  await page.getByRole('img', { name: 'Though shorter and slimmer than humans, elves are most easily identified by their pronounced, pointed ears. They have a reputation for being dignified and a bit aloof. Add Part' }).first().click();
  await page.locator('div:nth-child(2) > .label-0-2-209 > img:nth-child(3)').click();
  await page.getByRole('img', { name: 'Though shorter and slimmer than humans, elves are most easily identified by their pronounced, pointed ears. They have a reputation for being dignified and a bit aloof. Add Part' }).first().click();
  await page.getByText('body').click();
  await page.getByRole('listitem').filter({ hasText: 'legs' }).click();
  await page.getByRole('img', { name: 'Furry Clawed Legs Add Part' }).click();
  await page.getByRole('img', { name: 'Insectoid Legs Add Part' }).click();
  await page.getByRole('listitem').filter({ hasText: 'clothing' }).click();
  await page.getByRole('img', { name: 'A durable outfit of fur-trimmed leather, adorned with bones and reinforced with leather stiching. Add Part' }).click();
  await page.getByRole('img', { name: 'These flowing robes hint at arcane energies and shimmer in the sunlight. Add Part' }).click();
});