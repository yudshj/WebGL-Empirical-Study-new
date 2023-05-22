import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.because-recollection.com/');
  await page.locator('canvas').click({
    position: {
      x: 711,
      y: 558
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.goto('http://www.because-recollection.com/django-django');
  await page.keyboard.press('Space', {delay: 2500});
  await page.locator('canvas').click({
    position: {
      x: 569,
      y: 508
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.locator('canvas').click({
    position: {
      x: 671,
      y: 333
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.locator('canvas').click({
    position: {
      x: 534,
      y: 446
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.locator('canvas').click({
    position: {
      x: 618,
      y: 569
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.locator('canvas').click({
    position: {
      x: 630,
      y: 540
    }
  });
  await page.keyboard.press('Space', {delay: 2500});
  await page.getByRole('button', { name: 'spacebar' }).click();
  await page.getByRole('button', { name: 'spacebar' }).click();
});