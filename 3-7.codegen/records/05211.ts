import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/bts-x-street-galleries/GAF29KhE_DxEnA');
  await page.getByRole('button', { name: '启动实验' }).click();
});