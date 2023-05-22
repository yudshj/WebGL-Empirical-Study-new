import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://360.ozyegin.edu.tr/sanal-tur/index.html');
  await page.locator('div').filter({ hasText: /^SONRAKİ PANORAMA$/ }).first().click();
  await page.getByText('Özyeğin Üniversitesi 2015 Mezuniyet TöreniWelcome Week & Homecoming 2019İP ATLAY').click();
  await page.getByText('Özyeğin Üniversitesi 2015 Mezuniyet TöreniWelcome Week & Homecoming 2019İP ATLAY').click();
  await page.getByText('Özyeğin Üniversitesi 2015 Mezuniyet TöreniWelcome Week & Homecoming 2019İP ATLAY').click();
  await page.getByText('Özyeğin Üniversitesi 2015 Mezuniyet TöreniWelcome Week & Homecoming 2019İP ATLAY').click();
  await page.getByText('Özyeğin Üniversitesi 2015 Mezuniyet TöreniWelcome Week & Homecoming 2019İP ATLAY').click();
  await page.locator('div:nth-child(5) > div:nth-child(2)').first().click();
  await page.getByText('İP ATLAYAN KIZİP ATLAYAN KIZLOWER QUAD ORTA ALANLOWER QUAD ORTA ALANLOWER QUAD T').click();
  await page.getByText('İP ATLAYAN KIZİP ATLAYAN KIZLOWER QUAD ORTA ALANLOWER QUAD ORTA ALANLOWER QUAD T').click();
  await page.locator('div').filter({ hasText: /^SONRAKİ PANORAMA$/ }).first().click();
  await page.locator('div').filter({ hasText: /^ÖNCEKİ PANAROMA$/ }).first().click();
  await page.locator('div').filter({ hasText: /^ÖNCEKİ PANAROMA$/ }).first().click();
  await page.locator('div').filter({ hasText: /^ÖNCEKİ PANAROMA$/ }).first().click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});