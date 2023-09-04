import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.kleuterspel.be/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 365,
      y: 385
    }
  });
  await page.getByRole('button', { name: 'INFORMATIE VOOR OUDERS EN LEERKRACHTEN' }).click();
  await page.getByRole('button', { name: 'TERUG' }).nth(1).click();
  await page.locator('#unity-canvas').click({
    position: {
      x: 820,
      y: 574
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 250,
      y: 470
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 319,
      y: 113
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 468,
      y: 391
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 243,
      y: 424
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 527,
      y: 286
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 724,
      y: 304
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 555,
      y: 448
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 739,
      y: 441
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 680,
      y: 292
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 605,
      y: 301
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 575,
      y: 447
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 477,
      y: 398
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 474,
      y: 293
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 636,
      y: 290
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 793,
      y: 286
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 785,
      y: 300
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 618,
      y: 472
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 470,
      y: 290
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 441,
      y: 454
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 653,
      y: 454
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 647,
      y: 280
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 788,
      y: 285
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 843,
      y: 441
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 682,
      y: 291
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 643,
      y: 448
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 786,
      y: 274
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 343,
      y: 293
    }
  });
});