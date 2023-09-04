import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://trials.modernatx.com/study/?id=mRNA-1345-P301&utm_source=conquerrsv&utm_medium=redirect&utm_campaign=Germany');
});