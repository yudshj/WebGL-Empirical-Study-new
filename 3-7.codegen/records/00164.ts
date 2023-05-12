import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://apillisamoon.kroutsef.com/');
});