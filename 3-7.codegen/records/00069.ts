import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a.teall.info/dice/');
  await page.getByRole('button', { name: 'throw' }).click();
  await page.getByText('throw', { exact: true }).click();
  await page.locator('canvas').click({
    position: {
      x: 1278,
      y: 195
    }
  });
  await page.locator('div').filter({ hasText: 'click to continue or tap and drag again' }).nth(1).click();
  await page.getByRole('button', { name: 'throw' }).click();
  await page.getByText('teal dice More info and help Multiplayer version 4 2 2 6 = 14 click to continue ').click();
  await page.getByText('click to continue or tap and drag again').click();
  await page.getByRole('button', { name: 'throw' }).click();
  await page.locator('canvas').click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'throw' }).click();
});