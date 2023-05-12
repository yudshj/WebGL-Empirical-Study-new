import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://3d.narzanpalace.ru/');
});