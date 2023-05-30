import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://m.htpchem.com/');
  await page.goto('https://www.htpchem.com/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('#contents div').filter({ hasText: '360˚ 인터랙티브 콘텐츠로 한화토탈에너지스의 이야기를 감상해보세요. 삶을 더 풍요롭게 만드는 원료와 에너지 스토리가 생생한 근무 현장 속에서 ' }).nth(3).click();
  await page.getByRole('link', { name: '콘텐츠 감상하기 오른쪽 화살표' }).click();
  await page.getByRole('link', { name: '콘텐츠 감상하기 HD SD' }).click();
});