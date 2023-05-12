import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://fabrication-laitiere-france.com/en/introduction/');
  await page.getByRole('button', { name: 'Agree and close: Agree to our data processing and close' }).click();
});