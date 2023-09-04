import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://militaryfamilies.com/military-kid/gary-sinise-foundation-hosts-star-studded-event-for-children-of-the-fallen/');
});