import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/Rishit-dagli/Greenathon-Plant-AI');
  await page.getByRole('link', { name: 'www.plant-ai.tech/' }).click();
});