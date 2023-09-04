import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://chainide.com/s/createTempProject/ethereum');
  await page.goto('https://chainide.com/s/ethereum/317ce6105fea41369864e37102bf76f5?open=welcome&type=welcome');
  await page.getByRole('button', { name: 'Continue as Guest' }).click();
  await page.getByText('').click();
  await page.getByRole('button', { name: '×' }).click();
});