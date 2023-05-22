import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jadwigaprzedszkole.wkraj.pl/html5/index.php?id=72313');
  await page.goto('https://jadwigaprzedszkole.wkraj.pl/html5/index.php?id=72313#72247/296,-13');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.goto('https://jadwigaprzedszkole.wkraj.pl/html5/index.php?id=72313#72250/208,3');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.goto('https://jadwigaprzedszkole.wkraj.pl/html5/index.php?id=72313#72251/187,-1');
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});