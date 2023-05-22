import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://party.wearezizo.com/');
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Play' }).click();
  await page.locator('[id="__layout"]').click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click({
    clickCount: 7
  });
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('[id="__layout"]').click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('[id="__layout"]').click();
  await page.locator('[id="__layout"]').click();
  await page.locator('[id="__layout"]').click();
  await page.locator('div').filter({ hasText: 'Play' }).nth(3).click();
  await page.locator('div').filter({ hasText: /^Play$/ }).first().click();
});