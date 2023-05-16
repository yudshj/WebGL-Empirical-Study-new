import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://theforest.spellwood.fr/');
  await page.getByRole('img', { name: 'The Forest - a webgl interactive animation inside the origins of Johann Frizon\'s work' }).click();
});