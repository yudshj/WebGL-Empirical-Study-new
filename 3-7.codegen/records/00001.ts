import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://experiments.withgoogle.com/chrome-experiment-1000');
});