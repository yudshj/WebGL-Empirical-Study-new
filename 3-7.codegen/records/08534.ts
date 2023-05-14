import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://experience.eau.veolia.fr/');
  await page.locator('#root div').filter({ hasText: 'Parcourez les étapes du cycle de l\'eau par Veolia à travers le périple d\'une pet' }).locator('div').nth(3).click();
});