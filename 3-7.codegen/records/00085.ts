import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://aday.sanko.edu.tr/sanaltur.aspx');
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 761,
      y: 184
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 464,
      y: 183
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 751,
      y: 61
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 406,
      y: 169
    }
  });
});