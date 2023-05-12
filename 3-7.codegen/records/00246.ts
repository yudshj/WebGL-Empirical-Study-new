import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.baladi.codes/');
  await page.getByRole('button', { name: 'LAUNCH' }).click();
  await page.getByText('MOHAMED AMINE BALADIFULL STACK WEB DEVELOPERHOMEABOUTCAREEREXPERTISECONTACT>>> 3').click();
});