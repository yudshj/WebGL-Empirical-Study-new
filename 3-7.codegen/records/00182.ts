import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://armandoandopro.blogspot.com/');
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube-zoomin-button div').click();
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 79,
      y: 54
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 77,
      y: 81
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube-zoomout-button div').click();
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 101,
      y: 68
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 48,
      y: 101
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 49,
      y: 93
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 iframe >> nth=0').locator('#viewcube canvas').click({
    position: {
      x: 100,
      y: 103
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 div >> internal:has-text="Caleidoscopio Hexagonal para Armar Proyecto Caleidoscopio Octogonal"i >> iframe').locator('#viewcube-zoomin-button div').click();
  await page.frameLocator('#post-body-4772128464655774184 div >> internal:has-text="Caleidoscopio Hexagonal para Armar Proyecto Caleidoscopio Octogonal"i >> iframe').locator('#viewcube canvas').click({
    position: {
      x: 79,
      y: 95
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 div >> internal:has-text="Caleidoscopio Hexagonal para Armar Proyecto Caleidoscopio Octogonal"i >> iframe').locator('#viewcube canvas').click({
    position: {
      x: 104,
      y: 102
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 div >> internal:has-text="Caleidoscopio Hexagonal para Armar Proyecto Caleidoscopio Octogonal"i >> iframe').locator('#viewcube canvas').click({
    position: {
      x: 41,
      y: 103
    }
  });
  await page.frameLocator('#post-body-4772128464655774184 div >> internal:has-text="Caleidoscopio Hexagonal para Armar Proyecto Caleidoscopio Octogonal"i >> iframe').locator('#viewcube canvas').click({
    position: {
      x: 76,
      y: 101
    }
  });
});