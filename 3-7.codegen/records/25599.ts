import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.play337.com/a.asp?id=118');
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
  await page.frameLocator('internal:role=row[name="Advertisement Advertisement"i] >> iframe[name="afplay"]').frameLocator('#FlashGame').locator('#iframeDiv').click();
});