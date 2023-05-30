import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://grandland.prospectors.io/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Play Tutorial').click();
  const page1 = await page1Promise;
  await page1.goto('https://play.prospectors.io/?tutor=1');
  await page1.getByRole('button', { name: 'Begin' }).click({
    modifiers: ['Alt']
  });
  await page1.getByRole('button', { name: 'Begin' }).click({
    modifiers: ['Alt']
  });
  await page1.locator('canvas').click({
    modifiers: ['Alt'],
    position: {
      x: 637,
      y: 370
    }
  });
  await page1.locator('#frame_worker_1').click({
    modifiers: ['Alt']
  });
  await page1.getByRole('button', { name: 'Go here' }).click({
    modifiers: ['Alt']
  });
  await page1.getByRole('button', { name: 'Confirm' }).click({
    modifiers: ['Alt']
  });
  await page1.locator('div').filter({ hasText: 'Part 2 of 14Moving a workerWarehouse overviewMoving goods from the warehouseExtr' }).getByRole('button').nth(2).click({
    modifiers: ['Alt']
  });
});