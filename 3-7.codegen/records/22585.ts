import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.hispasexy.org/st/');
  await page.goto('https://stripchat.com/girls?affiliateId=2406234r4l02e4jfvef1v20bqt81n7mvhvyn5qxy9vxqnv9086vy6e4qydeean4m&campaignId=59839bc05d37c156133c6a0d19d9c8c83d34a8d58fbfd44e34f624f82b2157af&p1=255939&p2=26032&realDomain=go.xlivrdr.com&sound=off&sourceId=99795&stripbotVariation=NullWidget&userId=9ea39785438e301541da4fed7bc974d7711613cdc62dd3022c3da9841b818edf');
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '▼' }).click();
  const page3 = await page3Promise;
});