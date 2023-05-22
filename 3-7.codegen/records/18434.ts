import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://wiebkes-wirre-welt.de/');
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('heading', { name: '#homeschooling' }).click();
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.getByRole('button', { name: 'Los geht\'s!' }).click();
  await page.locator('#iV0_iiscenes_S_100_iinavcontainer div').click();
});