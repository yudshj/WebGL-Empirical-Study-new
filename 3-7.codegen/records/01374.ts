import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://mobile.senpai-agar.online/');
  await page.locator('div').filter({ hasText: 'feedplayESCCHATQ+-FPS: 60.0Canvas0(0+0)/0人SAO Mobile名前チームスキンプレイ観戦▲▼画面設定ゲーム解像度中(9' }).nth(1).click();
  await page.getByText('観戦').click();
});