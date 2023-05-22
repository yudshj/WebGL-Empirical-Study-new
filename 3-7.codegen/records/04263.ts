import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3dwerkzeug.daytonprogress.de/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.locator('#renderCanvas').click({
    position: {
      x: 654,
      y: 383
    }
  });
  await page.locator('#renderCanvas').click({
    button: 'right',
    position: {
      x: 654,
      y: 383
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 684,
      y: 386
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 684,
      y: 386
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 650,
      y: 377
    }
  });
  await page.locator('#renderCanvas').click({
    button: 'right',
    position: {
      x: 650,
      y: 377
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 704,
      y: 374
    }
  });
});