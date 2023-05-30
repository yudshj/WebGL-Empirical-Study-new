import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.proxi.co/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Play with Proxi' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'New York' }).click();
  await page1.getByRole('textbox', { name: 'Enter your email' }).fill('safdf@qq.com');
  await page1.getByRole('button', { name: 'Central Park' }).click();
  await page1.getByRole('button', { name: 'close,' }).click();
  await page1.getByRole('button', { name: 'AI Suggest Points with AI (beta)' }).click();
  await page1.locator('#gptAddPointsModal #modalContent').getByRole('button').click();
  await page1.getByRole('button', { name: 'Zoom in' }).click();
  await page1.getByRole('button', { name: 'Zoom in' }).click();
  await page1.getByRole('button', { name: 'Zoom in' }).click();
  await page1.getByRole('button', { name: 'Zoom in' }).click();
  await page1.locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page1.locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page1.getByRole('button', { name: 'Toggle GPS' }).click();
  await page1.getByRole('button', { name: 'AI Suggest Points with AI (beta)' }).click();
  await page1.getByRole('textbox').click();
  await page1.getByRole('button', { name: 'Sunny Day Activities +' }).click();
  await page1.getByRole('combobox').click();
  await page1.getByRole('option', { name: 'First Category' }).click();
  await page1.getByRole('button', { name: 'Generate Points' }).click();
});