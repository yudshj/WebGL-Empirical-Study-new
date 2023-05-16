import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.morefurniture.id/moreverse');
  await page.getByRole('button', { name: 'MOREVERSE CLICK TO ENTER' }).click();
});