import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cybernetic.dev/');
  await page.getByRole('button', { name: 'Explore >' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('#cube').getByRole('link', { name: 'Open Experiment' }).click();
  await page.locator('canvas').click({
    position: {
      x: 693,
      y: 350
    }
  });
  await page.getByRole('button', { name: '90' }).click();
  await page.getByRole('button', { name: '85' }).click();
  await page.locator('#content div').filter({ hasText: 'Cluster Radius - +' }).getByRole('button', { name: '+' }).click();
  await page.locator('#content div').filter({ hasText: 'Cluster Radius - +' }).getByRole('button', { name: '+' }).click({
    clickCount: 3
  });
  await page.locator('#content div').filter({ hasText: 'Cluster Radius - +' }).getByRole('button', { name: '-' }).click({
    clickCount: 3
  });
  await page.locator('#content div').filter({ hasText: 'Min Elements / Cluster - +' }).getByRole('button', { name: '+' }).click();
  await page.locator('#content div').filter({ hasText: 'Min Elements / Cluster - +' }).getByRole('button', { name: '+' }).click();
  await page.locator('#content div').filter({ hasText: 'Min Elements / Cluster - +' }).getByRole('button', { name: '-' }).dblclick();
  await page.locator('#ws-status').getByRole('button', { name: '+' }).click({
    clickCount: 4
  });
  await page.locator('#ws-status').getByRole('button', { name: '-' }).dblclick();
  await page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
  await page.locator('div:nth-child(2) > div:nth-child(4)').first().click();
  await page.locator('.control > .toggle > .dot').first().click();
});