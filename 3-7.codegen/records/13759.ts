import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://icedodo.onionfist.com/');
  await page.goto('https://icedodo.onionfist.com/singleplayer');
  await page.getByText('PLAY', { exact: true }).click();
  await page.goto('https://icedodo.onionfist.com/singleplayer');
});