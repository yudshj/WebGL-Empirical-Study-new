import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.nicovideo.jp/atsumaru/games/gm20357');
  await page.locator('div').filter({ hasText: /^ニコニコログインしてください未ログイン時のセーブデータはご利用のブラウザ仕様により削除される可能性があります。詳しくはこちら$/ }).getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' パッド' }).click();
  await page.locator('.icon-key-enter-o').first().click();
  await page.locator('.icon-key-enter-o').first().dblclick();
  await page.getByText('Enter').first().click();
  await page.locator('.icon-key-enter-o').first().click();
  await page.locator('.icon-key-enter-o').first().click();
  await page.locator('.icon-key-enter-o').first().click();
  await page.locator('.icon-key-enter-o').first().dblclick();
  await page.locator('.icon-key-esc').first().click();
  await page.locator('.icon-angle-right').first().click();
  await page.locator('.GamePlayerCoreArea__GamepadLeftSide').click();
  await page.locator('.icon-angle-up').first().dblclick();
  await page.locator('.GamepadKeyButton__CrossButton__Center').first().click();
  await page.locator('.GamepadKeyButton__CrossButton__Center').first().click();
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
  await page.locator('body').press('Enter');
});