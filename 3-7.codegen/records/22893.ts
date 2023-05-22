import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.im-c.com/game/cybercrimetime/en/');
  await page.goto('https://www.im-c.com/game/cybercrimetime/en/#/');
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'aria.next-button-label' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').click();
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').fill('8888');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button').click();
  await page.locator('button:nth-child(2)').click();
  await page.locator('button:nth-child(2)').click();
  await page.locator('button:nth-child(2)').click();
  await page.locator('button:nth-child(2)').click();
  await page.locator('button:nth-child(2)').click();
  await page.getByRole('button', { name: 'Accept mission' }).click();
  await page.getByRole('button', { name: 'Say hello!' }).click();
  await page.getByRole('button', { name: 'Ready!' }).click();
  await page.getByRole('button', { name: 'Let’s do this!' }).click();
  await page.locator('#map-3d-hotspots').click();
  await page.getByRole('button').click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.locator('#map-3d-hotspots').click();
  await page.locator('#hot-1-1').getByRole('button').click();
});