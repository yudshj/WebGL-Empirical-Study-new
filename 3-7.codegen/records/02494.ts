import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.captainslug.com/nerf/esper/');
  await page.goto('http://www.captainslug.com/nerf/esper/#eyJuYW1lIjoiIiwic2xvdHMiOnsiQmFzZSI6eyJuYW1lIjoiQmxhc3RlciIsIm1vZGVscyI6eyJDTVQiOnsibmFtZSI6IkNNVCIsImZpbGUiOiJjbXQuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFZGFydGphbSI6eyJuYW1lIjoiRWRhcnRqYW0iLCJmaWxlIjoiZWRhcnRqYW0uc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFTXV6emxlIjp7Im5hbWUiOiJFTXV6emxlIiwiZmlsZSI6ImVtdXp6bGUuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFVXBwZXIiOnsibmFtZSI6IkVVcHBlciIsImZpbGUiOiJldXBwZXIuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFQ291cGxlciI6eyJuYW1lIjoiRUNvdXBsZXIiLCJmaWxlIjoiZWNvdXBsZXIuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFTWFnUmVsZWFzZSI6eyJuYW1lIjoiRU1hZ1JlbGVhc2UiLCJmaWxlIjoiZW1hZ3JlbGVhc2Uuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFUmFtQmFzZSI6eyJuYW1lIjoiRVJhbUJhc2UiLCJmaWxlIjoiZXJhbWJhc2Uuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFUGx1bmdlciI6eyJuYW1lIjoiRVBsdW5nZXIiLCJmaWxlIjoiZXBsdW5nZXIuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFLVB1bGwiOnsibmFtZSI6IkUtUHVsbCIsImZpbGUiOiJlLXB1bGwuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFbmRjYXAiOnsibmFtZSI6IkVuZGNhcCIsImZpbGUiOiJlbmRjYXAuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFbmRzdHJpa2UiOnsibmFtZSI6IkVuZHN0cmlrZSIsImZpbGUiOiJlbmRsb29wLnN0bCIsImNvbG9yIjoiV2hpdGUifX19LCJHcmlwIjp7Im5hbWUiOiJNb25vbGl0aGljIiwibW9kZWxzIjp7IkVUcmlnZ2VyIEd1YXJkIjp7Im5hbWUiOiJFVHJpZ2dlciBHdWFyZCIsImZpbGUiOiJlZ3VhcmQuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFR3JpcCI6eyJuYW1lIjoiRUdyaXAiLCJmaWxlIjoiZWdyaXAuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFVHJpZ2dlciI6eyJuYW1lIjoiRVRyaWdnZXIiLCJmaWxlIjoiZXRyaWdnZXIuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9LCJFU2VhciI6eyJuYW1lIjoiRVNlYXIiLCJmaWxlIjoiZXNlYXIuc3RsIiwiY29sb3IiOiJXaGl0ZSJ9fX0sIkhhbmRndWFyZCI6eyJuYW1lIjoiTm9uZSIsIm1vZGVscyI6e319LCJHcmlwIEluc2VydCI6eyJuYW1lIjoiTm9uZSIsIm1vZGVscyI6e319LCJGRyBLaXQiOnsibmFtZSI6Ik5vbmUiLCJtb2RlbHMiOnt9fSwiRm9yZWdyaXAiOnsibmFtZSI6Ik5vbmUiLCJtb2RlbHMiOnt9fSwiSXJvbiBTaWdodHMiOnsibmFtZSI6Ik5vbmUiLCJtb2RlbHMiOnt9fX19');
  await page.locator('div').filter({ hasText: /^GripMonolithicAyyLMAO$/ }).getByRole('combobox').selectOption('AyyLMAO');
  await page.locator('div').filter({ hasText: /^EdartjamWhiteBlackOrangeBlueRedPurpleGreenPinkArmy GreenSilverKhakiAqua Blue$/ }).getByRole('combobox').selectOption('F66C0A');
  await page.locator('div:nth-child(7) > .header > select').selectOption('Yes');
  await page.locator('div:nth-child(6) > .header > select').selectOption('Ayy LMAO (Foregrip Kit Required)');
  await page.locator('div:nth-child(5) > .header > select').selectOption('Yeah');
  await page.locator('div:nth-child(4) > .header > select').selectOption('YES Monolithic');
  await page.locator('div:nth-child(3) > .header > select').selectOption('Knuckleduster');
  await page.locator('div').filter({ hasText: /^ESearWhiteBlackOrangeBlueRedPurpleGreenPinkArmy GreenSilverKhakiAqua Blue$/ }).getByRole('combobox').selectOption('40FF40');
  await page.locator('#zoom').click();
});