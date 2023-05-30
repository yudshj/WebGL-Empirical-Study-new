import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://museum.americangirl.com/play/');
  await page.goto('https://museum.americangirl.com/play/#/');
  await page.locator('.btn > img').first().click();
  await page.locator('.btn > img').first().click();
  await page.locator('.btn > img').first().click();
  await page.locator('.btn > img').first().dblclick();
  await page.getByText('Explore').dblclick();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('canvas').click({
    position: {
      x: 634,
      y: 665
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 780,
      y: 366
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 736,
      y: 650
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 508,
      y: 430
    }
  });
  await page.locator('.fly').click();
  await page.locator('.modalContentWrapperCloseButton > div > img').click();
  await page.locator('canvas').click({
    position: {
      x: 502,
      y: 642
    }
  });
  await page.locator('.close-icon > img').click();
  await page.locator('canvas').click({
    position: {
      x: 898,
      y: 462
    }
  });
  await page.locator('.close-icon').click();
});