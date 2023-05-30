import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.voxels.com/play?coords=@682W,555S,9.5F');
  await page.goto('https://www.voxels.com/play?coords=N@682W,555S,9.5F');
  await page.getByText('Dance').click();
  await page.getByText('Dance').nth(1).click();
  await page.locator('#renderCanvas').click({
    position: {
      x: 885,
      y: 543
    }
  });
  await page.mouse.move(100, 100);
  await page.goto('https://www.voxels.com/play?coords=N@687W,555S,10F');
  await page.goto('https://www.voxels.com/play?coords=E@684W,551S,7F');
  await page.goto('https://www.voxels.com/play?coords=N@687W,551S,7F');
  await page.goto('https://www.voxels.com/play?coords=N@689W,551S,7F');
  await page.goto('https://www.voxels.com/play?coords=N@688W,551S,7F');
});