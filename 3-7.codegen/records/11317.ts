import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://konfigurator.gerstner-trauringe.de/?ringconfig=095e691c15');
  await page.locator('#showUnity').check();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByRole('link', { name: '7' }).click();
});