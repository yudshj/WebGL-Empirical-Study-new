import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://3d.driphead.world/');
  await page.getByText('Begin').click();
});