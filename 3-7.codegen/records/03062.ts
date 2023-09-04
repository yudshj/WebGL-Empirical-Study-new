import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.kanal26.tv/index.php?pages=post_detail&page_seo_url=yilin-yerel-televizyonu');
});