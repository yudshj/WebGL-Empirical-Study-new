import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.netzbewegung.com/sing/');
  await page.getByRole('button', { name: 'Let us sing! TON AN!' }).click();
});