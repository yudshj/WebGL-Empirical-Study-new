import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fairertomorrow.stanford.edu/');
  await page.getByText('ENTERENTER').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').dblclick();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Will We Face Depression-Era Job Losses? Will We Face Depression-Era Job Losses? Let’s Not Find Out Let’s Not Find Out (read by Darrick Hamilton)' }).click();
  const page1 = await page1Promise;
  await page.locator('#light__close__button').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
  await page.locator('#light__close__button').click();
  await page.getByText('FAIRER TOMORROW Solutions to the issues highlighted by COVID ENTERENTER Center f').click();
});