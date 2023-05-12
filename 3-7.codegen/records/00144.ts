import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://analysis.4sceners.de/');
  await page.goto('http://analysis.4sceners.de/#!/');
  await page.locator('.play > div').click();
});