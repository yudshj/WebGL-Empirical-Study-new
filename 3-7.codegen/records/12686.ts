import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://meum.me/');
  await page.getByRole('button', { name: '메인 왼쪽 버튼 개인 전시 제작·관람' }).click();
  await page.getByRole('list').filter({ hasText: '최소희 개인전 <결계 結界>서금앵 개인전 <그대 머문 자리 Where you stayed>장윤지 개인전 <우리가 밤에 본 것들 What we s' }).getByRole('img', { name: '최소희 개인전 <결계 結界>' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: '전시 입장하기' }).click();
  const page2 = await page2Promise;
  await page.goto('https://meum.me/exhibition/28?type=recommend');
  await page2.goto('https://meum.me/meum/%EB%AF%80%EB%AF%B8/1724');
});