import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.kashiyatra.org/');
  await page.getByText('SAFARNAMAA Mystical VoyageRegister Now').click();
  await page.getByRole('list').filter({ hasText: /^TEAMSPONSORSPRE-EVENTSEVENTSCA$/ }).getByRole('link', { name: 'EVENTS', exact: true }).click();
  await page.locator('div:nth-child(5) > .mt-1 > div:nth-child(5) > button').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'CROSSWINDZ' }).click();
});