import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.jomalonetownhouse.com/');
  await page.goto('https://www.jomalonetownhouse.com/#/gb/en');
  await page.goto('https://www.jomalonetownhouse.com/#/gb/en/room');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.getByRole('main').getByRole('button').click();
  await page.getByRole('main').locator('canvas').click({
    position: {
      x: 830,
      y: 549
    }
  });
  await page.getByRole('main').locator('canvas').click({
    position: {
      x: 336,
      y: 292
    }
  });
  await page.mouse.down();
  await page.mouse.move(640, 480);
  await page.mouse.up();
  await page.getByRole('main').locator('canvas').click({
    position: {
      x: 1077,
      y: 415
    }
  });
  await page.getByRole('main').getByRole('button').click();
  await page.getByRole('main').getByRole('button').click();
  await page.getByRole('main').locator('canvas').click({
    position: {
      x: 414,
      y: 390
    }
  });
});