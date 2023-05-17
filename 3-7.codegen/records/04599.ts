import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ai-animal.web.app/');
  await page.getByText('男性').click();
  await page.getByText('画像を選択する').click();
  await page.getByText('AIがあなたの顔面成分を測定 AIどうぶつ顔診断 診断してみる このサイトではAIがあなたの顔面成分を分析します。 顔面成分は「ねこ」「いぬ」「たぬき」「きつね').setInputFiles('1.jpg');
  await page.getByText('この画像で診断').click();
});