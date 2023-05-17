import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.whatishappeninghere.com/');
  await page.frameLocator('internal:text="https://my.treedis.com/tour/what-is-happening-here-gallery-29dc6f68"i').getByRole('button', { name: 'Start' }).click();
});