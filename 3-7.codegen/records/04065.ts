import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://youmatter.accademiadellusso.com/');
  await page.goto('http://youmatter.accademiadellusso.com/en/uniqueness');
  await page.getByText('Click & Hold').click();
});