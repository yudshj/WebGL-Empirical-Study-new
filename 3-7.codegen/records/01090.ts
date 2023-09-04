import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://kabinet.fyzika.net/dilna/NTL-optika/flexibilni-zrcadlo-NTL-Optika.php');
});