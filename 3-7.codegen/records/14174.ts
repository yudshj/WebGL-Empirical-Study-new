import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://penaltykickonline.com/');
  await page.frameLocator('#iframehtml5').locator('#btn_playgame').click();
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 518,
      y: 398
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 430,
      y: 127
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 280,
      y: 216
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 592,
      y: 174
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 485,
      y: 367
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 383,
      y: 59
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 612,
      y: 65
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 490,
      y: 351
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').dblclick({
    position: {
      x: 485,
      y: 370
    }
  });
  await page.frameLocator('#iframehtml5').frameLocator('#gameFrame').locator('#canvas').click({
    position: {
      x: 382,
      y: 13
    }
  });
});