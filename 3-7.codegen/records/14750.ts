import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pusiki.mobi/start;jsessionid=66BE3AEA81E3DA1AACF86A9E5C613D70?0');
  await page.getByRole('link', { name: 'Новая игра' }).click();
  await page.locator('rect').click();
  await page.getByText('Пожалуйста, поверните устройство').click();
});