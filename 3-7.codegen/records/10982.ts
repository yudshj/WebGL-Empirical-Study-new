import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jp.rika.ren/live2d_v4/');
  await page.locator('#char').selectOption('1002');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('div').filter({ hasText: '1001-環いろは1002-七海やちよ1003-由比鶴乃1004-二葉さな1005-深月フェリシア1006-梓みふゆ1007-里見灯花1008-アリナ・グレイ1' }).click();
  await page.locator('#custom').selectOption('100200');
  await page.getByRole('combobox').nth(2).selectOption('mtn_ex_011.exp3.json');
  await page.getByRole('combobox').nth(3).selectOption('4');
  await page.getByRole('button', { name: 'play' }).nth(1).click();
  await page.getByRole('button', { name: '(re)play' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 237,
      y: 314
    }
  });
  await page.getByRole('button', { name: 'Background' }).click();
});