import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.luminartech.com/');
    await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('section').filter({ hasText: 'Our SolutionsA safer world driven by Luminar.Explore our SolutionsElevating high' }).locator('img').nth(1).click();
  await page.locator('section').filter({ hasText: 'TechnologyWe’re ready to roll out.We’re at the start of a new era. One where car' }).getByRole('button').nth(1).click();
  await page.locator('section').filter({ hasText: 'TechnologyWe’re ready to roll out.We’re at the start of a new era. One where car' }).getByRole('button').nth(2).click();
});