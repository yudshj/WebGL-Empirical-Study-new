import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cdn.soft8soft.com/AROAJSY2GOEHMOFUVPIOE:91399c9ca2/ImaginAction/ImaginAction.html');
  await page.getByText('start', { exact: true }).click();
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 558
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 558
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 638,
      y: 366
    }
  });
  await page.locator('canvas').press('w');

});