import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://sgcocoedu.com/');
  await page.goto('http://sgcocoedu.com/#!/index');
  await page.goto('http://sgcocoedu.com/#!/');
  await page.goto('http://sgcocoedu.com/#!/index');
  await page.goto('http://sgcocoedu.com/#!/home');
  await page.getByRole('button', { name: 'next' }).click();
  await page.getByRole('listitem').filter({ hasText: 'slide 5 of 5' }).nth(1).click();
});