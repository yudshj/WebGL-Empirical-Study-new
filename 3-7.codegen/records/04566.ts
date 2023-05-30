import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.agenciatesla.com/');
  await page.getByRole('link', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'SI' }).click();
  await page.locator('.scroll-navigation-inner > .elementor > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap > div:nth-child(5) > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item > a').first().click();
});