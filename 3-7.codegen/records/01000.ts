import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://idflood.github.io/ThreeNodes.js/');
  await page.getByRole('link', { name: 'Launch experiment!' }).click();
  await page.getByRole('menuitem', { name: 'Examples' }).click();
  await page.getByRole('menuitem', { name: 'Texture' }).click();
});