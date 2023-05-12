import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://3d.metprof.ru/');
});