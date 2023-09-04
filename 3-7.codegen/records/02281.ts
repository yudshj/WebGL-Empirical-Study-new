import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.adeera.org.ar/');
  await page.frameLocator('#frameVideo').getByRole('button', { name: 'Play' }).click();
  await page.getByRole('link', { name: 'close' }).click();
  await page.getByText('navigate_next').nth(1).click();
  await page.locator('#news').getByText('navigate_before').first().click();
  await page.locator('#adeeraMag').getByText('navigate_before').click();
  await page.locator('.book').first().click();
  await page.getByText('navigate_next').nth(4).click();
});