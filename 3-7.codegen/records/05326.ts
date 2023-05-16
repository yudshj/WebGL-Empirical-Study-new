import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://atelier.net/social-mobility/');
  await page.getByRole('img', { name: 'Falling person' }).click();
  await page.getByText('SOCIAL MOBILITY IN THE DIGITAL AGESOCIAL MOBILITY IN THE DIGITAL AGEThe story of').press('ArrowDown');
  await page.getByText('SOCIAL MOBILITY IN THE DIGITAL AGESOCIAL MOBILITY IN THE DIGITAL AGEThe story of').press('ArrowDown', {delay: 5_000});
  await page.getByText('SOCIAL MOBILITY IN THE DIGITAL AGESOCIAL MOBILITY IN THE DIGITAL AGEThe story of').press('ArrowDown');
});