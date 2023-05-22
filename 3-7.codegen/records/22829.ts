import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.idlelightcity.com/');
  await page.frameLocator('#gameFrame').locator('#game').click({
    position: {
      x: 591,
      y: 620
    }
  });
  await page.frameLocator('#gameFrame').locator('#game').click({
    position: {
      x: 591,
      y: 620
    }
  });
  await page.frameLocator('#gameFrame').locator('#game').dblclick({
    position: {
      x: 579,
      y: 589
    }
  });
  await page.frameLocator('#gameFrame').locator('#game').click({
    position: {
      x: 585,
      y: 605
    }
  });
  await page.frameLocator('#gameFrame').locator('#game').click({
    position: {
      x: 588,
      y: 601
    }
  });
  await page.frameLocator('#gameFrame').getByText('Idle Light City100% of 32MBPreparing game...Tap anywhere to play ad').press('F12');
  await page.frameLocator('#gameFrame').getByText('Idle Light City100% of 32MBPreparing game...Tap anywhere to play ad').press('F12');
  await page.frameLocator('#gameFrame').getByText('Idle Light City100% of 32MBPreparing game...Tap anywhere to play ad').press('F12');
  await page.frameLocator('#gameFrame').locator('#game').click({
    position: {
      x: 608,
      y: 613
    }
  });
});