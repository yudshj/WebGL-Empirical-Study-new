import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://stykovka.com/');
  await page.goto('https://stykovka.com/start');
  await page.getByRole('button', { name: 'Good' }).click();
  await page.getByRole('button', { name: 'Let’s go!' }).click();
  await page.goto('https://stykovka.com/start');
  await page.getByRole('button', { name: 'CHECK To find out how much we fit together, take the docking test' }).click();
  await page.goto('https://stykovka.com/test');
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'We will discuss everything in correspondence.' }).click();
  await page.getByRole('button', { name: 'We don\'t mind, but you have to respect the boundaries.' }).click();
  await page.getByRole('button', { name: 'Outsourcing by fix or labor costs.\nWe just need money, a lot of money, give us more money.' }).click();
  await page.getByRole('button', { name: 'Less than 100 $.' }).click();
  await page.goto('https://stykovka.com/test');
  await page.getByRole('button', { name: 'Restart' }).click();
});