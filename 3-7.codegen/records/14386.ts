import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.etherjump.game/');
  await page.getByText('Speedrun').click();
  await page.getByText('Easy').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Featured Plot' }).click();
  const page1 = await page1Promise;
  await page1.locator('#unity-canvas').click({
    position: {
      x: 696,
      y: 386
    }
  });
  await page1.locator('#unity-canvas').press('ArrowLeft');
  await page1.locator('#unity-canvas').press('ArrowLeft');
  await page1.locator('#unity-canvas').press('ArrowLeft');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowRight');
  await page1.locator('#unity-canvas').press('ArrowUp');
  await page1.locator('#unity-canvas').press('ArrowUp');
  await page1.locator('#unity-canvas').press('ArrowUp');
});