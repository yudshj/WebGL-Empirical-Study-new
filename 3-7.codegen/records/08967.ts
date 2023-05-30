import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://foretagsresan.regionorebrolan.se/');
  await page.getByRole('button', { name: 'OK, nu kör vi' }).click();
  await page.locator('#gatsby-focus-wrapper div').filter({ hasText: 'Företagsresan1. Fundera och testaHar du en bra idé? Och vill köra igång direkt? ' }).click();
  await page.getByRole('button', { name: '2. Starta' }).click();
  await page.getByRole('button', { name: '3. Driva och utveckla' }).click();
  await page.getByRole('button', { name: '4. Finansiera' }).click();
  await page.getByRole('button', { name: '5. Sälja och köpa' }).click();
  await page.getByRole('button', { name: '6. Framme? Det vet bara du!' }).click();
  await page.getByRole('button', { name: 'Starta om' }).click();
});