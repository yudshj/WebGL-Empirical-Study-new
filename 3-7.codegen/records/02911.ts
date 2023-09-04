import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.hellmonsoedt.ooe.gv.at/');
  await page.getByText('Alle akzeptieren').first().click();
  await page.frameLocator('iframe[title="YouTube video player"]').getByRole('button', { name: 'Play' }).click();
});