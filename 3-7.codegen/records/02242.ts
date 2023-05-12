import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.2dpaintball.com/');
  await page.getByRole('link', { name: ' Play Now!' }).click();
  await page.goto('http://www.2dpaintball.com/pball.php?key=23e8e47985ea8982ef629dd4e1f73a3e');
});