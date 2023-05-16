import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://stacksdegens.com/');
  await page.getByRole('link', { name: 'Race', exact: true }).click();
  await page.getByText('LET\'S GET STARTED').click();
  await page.getByText('LET\'S GET STARTED').click();
});