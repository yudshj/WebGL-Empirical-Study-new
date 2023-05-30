import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vmmo.pusiki.mobi/start;jsessionid=FF9388DED6EBA54012EACC11F586E60C?0');
  await page.getByRole('link', { name: 'Новая игра' }).click();
  await page.locator('svg').click();
  await page.getByText('Пожалуйста, поверните устройство').click();
});