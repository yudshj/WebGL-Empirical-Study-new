import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.im-c.com/game/cybercrimetime/en/#/');
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'aria.next-button-label' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').click();
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button').click();
});