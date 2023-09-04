import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sit.ac.in/html/home.html#carouselExampleIndicators');
  await page.frameLocator('iframe').getByRole('img').first().click();
  await page.frameLocator('iframe').locator('#panFrame div').filter({ hasText: 'Section Menu: Click on the section of your interest to directly go there Feature' }).first().click();
  await page.getByText('Gold Medalist 2021 - 2022 CHARAN RAJ V1SI18CV005 HARISH G R1SI18ME038 KEERTHANA ').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Go East' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Go Southeast' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Go Southwest' }).click();
});