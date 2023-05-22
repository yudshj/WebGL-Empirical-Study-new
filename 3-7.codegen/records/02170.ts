import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://vr.jadedalloul.com/');
  await page.getByRole('button', { name: 'Enter in the gallery' }).click();
  await page.locator('#menu > .hamburger').click();
  await page.getByText('Damascus Underground').click();
  await page.locator('canvas').click({
    position: {
      x: 380,
      y: 509
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 691,
      y: 458
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1044,
      y: 300
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 733,
      y: 258
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 501,
      y: 282
    }
  });
  await page.mouse.down();
  await page.mouse.move(100, 100);
  await page.mouse.up();
});