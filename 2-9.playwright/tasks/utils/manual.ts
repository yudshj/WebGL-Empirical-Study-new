import { Page } from "@playwright/test";

export const manual: { [key: string]: (page: Page) => Promise<void> } = {
'00003': async (page: Page) => {
  await page.getByRole('link', { name: '~ releases' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('~>').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('~>').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('~>').dblclick();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00011': async (page: Page) => {
  await page.getByRole('button', { name: 'Let\'s play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.joker').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.joker-container > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00012': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept and continue' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Step inside Step inside' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00017': async (page: Page) => {
  await page.locator('#gameContainer').click({
    position: {
      x: 693,
      y: 528
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#gameContainer').click({
    position: {
      x: 1057,
      y: 616
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00034': async (page: Page) => {
  await page.getByText('ParkingChata KasowaWCPod Czerwonym Gryfem11Jesteś tutajNawigacjaPoprzednia Panor').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00035': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Thay Đổi Góc NhìnPhóng To - Thu NhỏClick để tham quan dự án' }).nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00036': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 574,
      y: 383
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00037': async (page: Page) => {
  await page.getByText('Begin').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00039': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 681,
      y: 336
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 416,
      y: 332
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 220,
      y: 360
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 255,
      y: 328
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 158,
      y: 329
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00049': async (page: Page) => {
  await page.getByRole('button', { name: 'ACCEPTAR' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Descobreix-ho' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00068': async (page: Page) => {
  await page.getByText('Shall we begin?').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 595,
      y: 348
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00069': async (page: Page) => {
  await page.getByRole('button', { name: 'throw' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('throw', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1278,
      y: 195
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'click to continue or tap and drag again' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'throw' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('teal dice More info and help Multiplayer version 4 2 2 6 = 14 click to continue ').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('click to continue or tap and drag again').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'throw' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    clickCount: 3
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'throw' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00076': async (page: Page) => {
  await page.locator('div:nth-child(12) > div > div > div:nth-child(2) > div:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div > div > div:nth-child(3) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div > div > div:nth-child(4) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div > div > div:nth-child(5) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div:nth-child(6) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div > div > div:nth-child(7) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(8) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(9) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(10) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(11) > div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00080': async (page: Page) => {
  await page.getByText('Start the journey').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00085': async (page: Page) => {
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 761,
      y: 184
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 464,
      y: 183
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 751,
      y: 61
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 406,
      y: 169
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00119': async (page: Page) => {
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').dblclick();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00144': async (page: Page) => {
  await page.locator('.play > div').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00178': async (page: Page) => {
  await page.getByText('Accept').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^EXPLORE$/ }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(4) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(6) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(7) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(8) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(9) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(10) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(11) > .hover-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00190': async (page: Page) => {
  await page.getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00197': async (page: Page) => {
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#maincontent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00212': async (page: Page) => {
  await page.locator('#Contents a').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Contents a').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00218': async (page: Page) => {
  await page.getByText('Launch').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00221': async (page: Page) => {
  await page.getByRole('textbox').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox').fill('foobar');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Submit ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Yes ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Click Anywhere to Begin ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '[ See The Others ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00225': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTRER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 637,
      y: 355
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 300,
      y: 116
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 437,
      y: 223
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00246': async (page: Page) => {
  await page.getByRole('button', { name: 'LAUNCH' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('MOHAMED AMINE BALADIFULL STACK WEB DEVELOPERHOMEABOUTCAREEREXPERTISECONTACT>>> 3').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00248': async (page: Page) => {
  await page.locator('.scroll-down__circle-1').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00262': async (page: Page) => {
  await page.getByRole('heading', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00277': async (page: Page) => {
  await page.getByRole('paragraph').filter({ hasText: 'Out now' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00279': async (page: Page) => {
  await page.getByText('Render Beeple').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Close Render').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('New Beeple').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('New Beeple').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00304': async (page: Page) => {
  await page.locator('#Layer_1').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Layer_1').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00317': async (page: Page) => {
  await page.getByRole('button', { name: 'Bekrefte' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00319': async (page: Page) => {
  await page.frameLocator('#maingameframe').locator('#guestOrAccountContainer_guestButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#maingameframe').locator('#guestPlayButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#maingameframe').getByText('Quick Play', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00359': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.close-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Discover Byte Street').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00362': async (page: Page) => {
  await page.getByText('BEGIN').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 312,
      y: 235
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1047,
      y: 575
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 687,
      y: 415
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1153,
      y: 590
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1146,
      y: 606
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 511,
      y: 378
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 549,
      y: 348
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 578,
      y: 301
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 521,
      y: 291
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1150,
      y: 604
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 1163,
      y: 580
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00378': async (page: Page) => {
  await page.getByText('Skip tutorial').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Skip tutorial').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'Close' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'Close' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#projectContent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#projectContent').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00424': async (page: Page) => {
  await page.getByText('PLAY THE GAME Over 35.6 million cars were registered for the road in the UK last').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowDown', {delay: 5000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('PLAY', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00446': async (page: Page) => {
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('1 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#OneBook3d_227662_stage').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#OneBook3d_227662_stage_container').click({
    clickCount: 11
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#OneBook3d_227662_stage_container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('3 / 3Selecciona la pagina para guardar por favorIzquierda o Derecha').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00459': async (page: Page) => {
  await page.frameLocator('#HTML25 iframe').getByText('3D-Functions Plotter | www.mathstools.comExecuteAnalysisToolsHelp Analytic z=f(x').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#HTML25 iframe').getByRole('button', { name: 'I agree' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#HTML25 iframe').getByRole('button', { name: 'Plot f(x,y)' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00461': async (page: Page) => {
  await page.frameLocator('iframe[title="collage"]').getByRole('button', { name: 'Continue' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[title="collage"]').locator('#prompt-container').getByRole('slider').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[title="collage"]').getByRole('button', { name: 'Render the Window into your Prompt.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[title="collage"]').getByRole('button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00466': async (page: Page) => {
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 150,
      y: 145
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 403,
      y: 290
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 198,
      y: 176
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 182
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 181
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').dblclick({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    clickCount: 4,
    position: {
      x: 376,
      y: 180
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pour voir les sucres tomber, il faut un navigateur plus récent.').click({
    position: {
      x: 402,
      y: 294
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00480': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00508': async (page: Page) => {
  await page.getByRole('button', { name: 'Launch Digital Pavillion' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00522': async (page: Page) => {
  await page.getByText('Play', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00528': async (page: Page) => {
  await page.locator('#renderCanvas').click({
    position: {
      x: 656,
      y: 428
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 731,
      y: 420
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 654,
      y: 429
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 664,
      y: 430
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 660,
      y: 461
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 1175,
      y: 401
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 964,
      y: 499
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 674,
      y: 348
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00547': async (page: Page) => {
  await page.locator('#renderCanvas').click({
    position: {
      x: 387,
      y: 390
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 387,
      y: 390
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00578': async (page: Page) => {
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1202,
      y: 517
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1191,
      y: 515
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1191,
      y: 515
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 643,
      y: 510
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00580': async (page: Page) => {
  await page.getByRole('link', { name: '进入' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('出生年份').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('出生年份').fill('1800');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '进入' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '在VR虚拟现实中探索' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 576,
      y: 326
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00600': async (page: Page) => {
  await page.getByPlaceholder('Nickname').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Nickname').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00601': async (page: Page) => {
  await page.getByPlaceholder('Nickname').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Nickname').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00614': async (page: Page) => {
  await page.locator('#loader-canvas').click({
    position: {
      x: 640,
      y: 429
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00625': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 651,
      y: 342
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 651,
      y: 342
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 661,
      y: 358
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 735,
      y: 209
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 620,
      y: 161
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 633,
      y: 206
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 632,
      y: 319
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').dblclick({
    position: {
      x: 632,
      y: 319
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 523,
      y: 331
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 628,
      y: 355
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 303
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 373,
      y: 75
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 374,
      y: 139
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00629': async (page: Page) => {
  await page.getByText('start designing').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('listitem').filter({ hasText: /^Football$/ }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Womens').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.colors > li:nth-child(4) > span').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('listitem').filter({ hasText: 'Singlet' }).locator('span').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00653': async (page: Page) => {
  await page.locator('#virtualVandal-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#anaesterizer-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#drummer-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#meme-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#meme-icon').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 443,
      y: 218
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 387,
      y: 131
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 459,
      y: 300
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 395,
      y: 259
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 320,
      y: 249
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#virtualVandal-canvas canvas').click({
    position: {
      x: 384,
      y: 185
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00671': async (page: Page) => {
  await page.getByRole('button', { name: 'Let\'s Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00701': async (page: Page) => {
  await page.getByRole('button', { name: '[ SPECTATE ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00717': async (page: Page) => {
  await page.getByRole('link', { name: 'Inizia l\' esperienza' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(3)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(4)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(5)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(6)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(7)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(8)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(9)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(10)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(11)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(12)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00718': async (page: Page) => {
  await page.getByRole('link', { name: 'Start the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > .base').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(4)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(5)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nav > div:nth-child(6)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(7)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(8)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(9)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(10)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(11)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(12)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00721': async (page: Page) => {
  await page.getByText('Sepulchral Chamber').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00733': async (page: Page) => {
  await page.locator('#library-contents').getByRole('link', { name: 'Tepper' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Skalerbar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Rektangel' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Sofa' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Choice' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Choice Air' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Lag en ny kombinasjon.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Modul 301 (3 seter)' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Modul 251' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Modul 503' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Modul 506' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Modul 506' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00735': async (page: Page) => {
  await page.locator('.target-circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.pulsate').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.target-circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.target-circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.target-circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'click & drag down the circle to navigate through the experience' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').dblclick();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('1', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('open scene').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('0 1 2 3 4 5 6 7 8 9').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00794': async (page: Page) => {
  await page.getByText('Accept').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00810': async (page: Page) => {
  await page.getByRole('button', { name: 'Discover Petra' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00812': async (page: Page) => {
  await page.getByRole('button', { name: 'Play Four Seasons' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00814': async (page: Page) => {
  await page.getByPlaceholder('Name').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Name').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00822': async (page: Page) => {
  await page.frameLocator('#game_embed iframe').locator('canvas').click({
    position: {
      x: 478,
      y: 238
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game_embed iframe').locator('canvas').click({
    position: {
      x: 768,
      y: 394
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00855': async (page: Page) => {
  await page.locator('div').filter({ hasText: /^ENGLISH$/ }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00857': async (page: Page) => {
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00863': async (page: Page) => {
  await page.getByRole('button', { name: 'Start Tour' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'Explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: '3D Model' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00869': async (page: Page) => {
  await page.locator('#beginExplore').getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00871': async (page: Page) => {
  await page.getByRole('button', { name: 'Ative o som' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00881': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 633,
      y: 300
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00901': async (page: Page) => {
  await page.locator('#intro canvas').click({
    position: {
      x: 28,
      y: 372
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00905': async (page: Page) => {
  await page.locator('#nick').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nick').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nick').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play as guest' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00919': async (page: Page) => {
  await page.locator('canvas').nth(1).click({
    position: {
      x: 451,
      y: 447
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#inputField').fill('aaa');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'type a 3 letter word stinkdigital' }).locator('div').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00923': async (page: Page) => {
  await page.frameLocator('#iframe-map').locator('#map_id canvas').click({
    position: {
      x: 83,
      y: 200
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#iframe-map').getByTitle('Yakınlaştır').locator('span').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#iframe-map').getByTitle('Yakınlaştır').locator('span').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'00958': async (page: Page) => {
  await page.getByRole('button', { name: 'user location icon Use your location' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'checkmark icon' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'location marker icon Enter an address' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'go!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01000': async (page: Page) => {
  await page.getByRole('link', { name: 'Launch experiment!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('menuitem', { name: 'Examples' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('menuitem', { name: 'Texture' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01052': async (page: Page) => {
  await page.getByText('start', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Нажми на него, чтобы узнать, почему тебе стоит поступать на ИУ7').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#laptop > path:nth-child(32)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#laptop-md span').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.table-illustration').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#bookshelf ellipse').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.free-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#laptop-screen').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.free-area').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#lamp > path:nth-child(12)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01079': async (page: Page) => {
  await page.getByRole('link', { name: 'PLAY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01082': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 575
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 645,
      y: 645
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 564,
      y: 438
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowUp');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowLeft');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01086': async (page: Page) => {
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.code').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01115': async (page: Page) => {
  await page.keyboard.press('x');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01136': async (page: Page) => {
  await page.locator('#UpperCanvas').click({
    position: {
      x: 425,
      y: 419
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 751,
      y: 375
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 309,
      y: 534
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 407,
      y: 573
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowRight');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 596,
      y: 549
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 612,
      y: 550
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 379,
      y: 555
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 369,
      y: 537
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 620,
      y: 555
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').dblclick({
    position: {
      x: 615,
      y: 552
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 615,
      y: 552
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#UpperCanvas').click({
    position: {
      x: 642,
      y: 373
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01155': async (page: Page) => {
  await page.getByText('LOADING ENTER').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01194': async (page: Page) => {
  await page.getByRole('button', { name: 'Go' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01197': async (page: Page) => {
  await page.locator('#layaCanvas').click({
    position: {
      x: 267,
      y: 538
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 276,
      y: 234
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 303,
      y: 370
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 294,
      y: 78
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 295,
      y: 113
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 285,
      y: 139
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 311,
      y: 685
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 338,
      y: 669
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    clickCount: 10,
    position: {
      x: 484,
      y: 151
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    clickCount: 9,
    position: {
      x: 498,
      y: 215
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    position: {
      x: 357,
      y: 673
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#layaCanvas').click({
    clickCount: 4,
    position: {
      x: 336,
      y: 414
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01227': async (page: Page) => {
  await page.getByRole('link').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'men' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01233': async (page: Page) => {
  await page.getByText('Begin').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Continue').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01261': async (page: Page) => {
  await page.getByText('High Bandwidth experience').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01272': async (page: Page) => {
  await page.getByRole('button', { name: 'Run website »' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01311': async (page: Page) => {
  await page.getByRole('link', { name: 'BATTLE GRADE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01330': async (page: Page) => {
  await page.getByRole('link', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01333': async (page: Page) => {
  await page.getByRole('button', { name: 'HIGH-RES for a complete experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#happy_santa').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Write your text').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Write your text').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#buttons-container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > div:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Write your text').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > div:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > div:nth-child(2)').click({
    clickCount: 4
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01360': async (page: Page) => {
  await page.locator('#UpperCanvas').click({
    position: {
      x: 386,
      y: 413
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01374': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'feedplayESCCHATQ+-FPS: 60.0Canvas0(0+0)/0人SAO Mobile名前チームスキンプレイ観戦▲▼画面設定ゲーム解像度中(9' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('観戦').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01378': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 666,
      y: 418
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 642,
      y: 455
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Skip Tour').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 355
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 264,
      y: 441
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 303,
      y: 602
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 961,
      y: 204
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 624,
      y: 575
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 619,
      y: 461
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 537,
      y: 563
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01408': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 536,
      y: 124
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 767,
      y: 523
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01412': async (page: Page) => {
  await page.getByRole('link', { name: 'Fall' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Plunge' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.leavingLayer').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01419': async (page: Page) => {
  await page.frameLocator('iframe').getByText('Mythomagic Online has moved to mythogame.com. the game is no longer actively mai').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('link', { name: 'mythogame.com' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.getByRole('link', { name: 'play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01427': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01437': async (page: Page) => {
  await page.getByRole('button', { name: 'Aan de slag!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#icon-container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('img:nth-child(15)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01445': async (page: Page) => {
  await page.getByPlaceholder('Enter your player name!').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Enter your player name!').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Play!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01449': async (page: Page) => {
  await page.getByRole('link', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01459': async (page: Page) => {
  await page.getByRole('button', { name: 'TELL ME' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01466': async (page: Page) => {
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'akzeptieren' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01467': async (page: Page) => {
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01470': async (page: Page) => {
  await page.getByRole('button', { name: '100% Hold' }).click({delay: 2000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01487': async (page: Page) => {
  await page.getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01506': async (page: Page) => {
  await page.getByRole('link', { name: 'TAKE ME TO MIGHTY EYES' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.div-block-136').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01523': async (page: Page) => {
  await page.locator('div').filter({ hasText: /^START$/ }).nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01527': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 886,
      y: 368
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 840,
      y: 487
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 863,
      y: 382
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 969,
      y: 498
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 968,
      y: 501
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 700,
      y: 383
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 950,
      y: 386
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 947,
      y: 476
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 523,
      y: 293
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01531': async (page: Page) => {
  await page.locator('#story').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#main').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01532': async (page: Page) => {
  await page.locator('#story').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#main').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01579': async (page: Page) => {
  await page.getByText('Medium').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Go').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 614,
      y: 296
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 288,
      y: 483
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 836,
      y: 491
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 348,
      y: 234
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01604': async (page: Page) => {
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'ИГРАТЬ' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01635': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 665,
      y: 482
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 660,
      y: 450
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01638': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 986,
      y: 568
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01836': async (page: Page) => {
  await page.getByText('play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01862': async (page: Page) => {
  await page.getByText('Enter the showroom').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#main_canvas').click({
    position: {
      x: 285,
      y: 328
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#main_canvas').click({
    position: {
      x: 623,
      y: 341
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01913': async (page: Page) => {
  await page.locator('#oval').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#mainBigButton path').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#mouse_button_svg').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#okRoundButton path').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01948': async (page: Page) => {
  await page.locator('div:nth-child(7) > a').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02033': async (page: Page) => {
  await page.getByRole('button', { name: 'enter site' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02242': async (page: Page) => {
  await page.getByRole('link', { name: ' Play Now!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02277': async (page: Page) => {
  await page.getByText('Let\'s get started').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Downpatrick Leisure CentreDownpatrickDownpatrick Leisure CentreDownpatrickThe Oz').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02463': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'START 3D EXPERIENCE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02494': async (page: Page) => {
  await page.locator('div').filter({ hasText: /^GripMonolithicAyyLMAO$/ }).getByRole('combobox').selectOption('AyyLMAO');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^EdartjamWhiteBlackOrangeBlueRedPurpleGreenPinkArmy GreenSilverKhakiAqua Blue$/ }).getByRole('combobox').selectOption('F66C0A');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(7) > .header > select').selectOption('Yes');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(6) > .header > select').selectOption('Ayy LMAO (Foregrip Kit Required)');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(5) > .header > select').selectOption('Yeah');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(4) > .header > select').selectOption('YES Monolithic');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > .header > select').selectOption('Knuckleduster');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^ESearWhiteBlackOrangeBlueRedPurpleGreenPinkArmy GreenSilverKhakiAqua Blue$/ }).getByRole('combobox').selectOption('40FF40');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#zoom').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02568': async (page: Page) => {
  await page.locator('#enter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03130': async (page: Page) => {
  await page.getByRole('button', { name: 'Tout accepter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03620': async (page: Page) => {
  await page.locator('#preloader-container div').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04151': async (page: Page) => {
  await page.frameLocator('iframe[title="Game Frame"]').frameLocator('iframe[name="Game Frame"]').locator('#gameContainer').click({
    position: {
      x: 736,
      y: 483
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[title="Game Frame"]').frameLocator('iframe[name="Game Frame"]').locator('#gameContainer').click({
    position: {
      x: 723,
      y: 484
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04169': async (page: Page) => {
  await page.getByRole('button', { name: 'Explorer le navire' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04429': async (page: Page) => {
  await page.getByRole('link', { name: '– English' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04573': async (page: Page) => {
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05209': async (page: Page) => {
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05216': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05234': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'work Your Bag 1 close Click on your bag to examine things you\'ve found.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('picture:nth-child(2) > img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05448': async (page: Page) => {
  await page.getByRole('button', { name: 'Start exploring' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05678': async (page: Page) => {
  await page.locator('#startWebsite').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05852': async (page: Page) => {
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06167': async (page: Page) => {
  await page.getByText('Freeplay').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06624': async (page: Page) => {
  await page.getByRole('button', { name: 'MODEL DS STATIC - LARGE BASIN' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'MODEL J PARALLEL' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'MODEL T TANDEM' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06874': async (page: Page) => {
  await page.getByRole('button', { name: 'Click to Close' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Click to play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'S k i p V i d e o' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Moon', { exact: true }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Click to play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'skip' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Earth', { exact: true }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Click to play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06875': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter Elisus' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07228': async (page: Page) => {
  await page.getByRole('button', { name: 'Permitir todo' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'CREAR COCINA GUIADA' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08180': async (page: Page) => {
  await page.locator('div').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08534': async (page: Page) => {
  await page.locator('#root div').filter({ hasText: 'Parcourez les étapes du cycle de l\'eau par Veolia à travers le périple d\'une pet' }).locator('div').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08551': async (page: Page) => {
  await page.getByRole('button', { name: 'Show me what you can do' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#text-box').getByRole('button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08600': async (page: Page) => {
  await page.getByRole('button', { name: 'Agree and close: Agree to our data processing and close' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09137': async (page: Page) => {
  await page.getByRole('button', { name: 'Begin' }).click({
    position: {
      x: 106,
      y: 110
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09193': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 699,
      y: 598
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 597,
      y: 407
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 624,
      y: 413
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 668,
      y: 588
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 640,
      y: 621
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 603
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 812,
      y: 551
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09282': async (page: Page) => {
  await page.getByRole('button', { name: 'Start Exploring' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '2. Integrated Camera Control' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '3. WebGL Overlay View' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '4. Depth and Occlusion' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '5. Data Visualization' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '6. Reimagine the Map' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09283': async (page: Page) => {
  await page.getByRole('button', { name: 'Start Exploring' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09465': async (page: Page) => {
  await page.getByRole('link', { name: 'www.plant-ai.tech/' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09468': async (page: Page) => {
  await page.getByRole('link', { name: 'https://bengfarrell.github.io/paperdoll' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const downloadPromise = page.waitForEvent('download');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'S Camera 18 N Take Photo' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const download = await downloadPromise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09477': async (page: Page) => {
  await page.getByRole('link', { name: 'https://codepen.io/jasonmayes/pen/GRJqgma' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09907': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09942': async (page: Page) => {
  await page.getByRole('button', { name: 'Learn!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Learn!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09969': async (page: Page) => {
  await page.getByText('High').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 639,
      y: 449
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'skip video' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10597': async (page: Page) => {
  await page.getByRole('button', { name: 'DISCOVER INSURRECTION' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10620': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 659,
      y: 462
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('HOLD TO CHANGE').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('HOLD TO CHANGE').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#cookie-consent-banner').getByText('accept', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11317': async (page: Page) => {
  await page.locator('#showUnity').check();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '7' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11358': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Surprise ! Try it ! Find The Easter egg. K M C 滑鼠左鍵 以及點擊鍵盤 任意鍵 可以關閉提示 ※ Cookie 提' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11645': async (page: Page) => {
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#bs-select-20-3').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('combobox', { name: 'Asphalt' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#bs-select-5-1').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11648': async (page: Page) => {
  await page.getByRole('button', { name: 'Select Input Image' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Select Input Image' }).setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11956': async (page: Page) => {
  await page.getByRole('textbox').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox').setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11970': async (page: Page) => {
  await page.getByText('ON', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 787,
      y: 176
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12079': async (page: Page) => {
  await page.locator('#renderCanvas').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12116': async (page: Page) => {
  await page.getByText('Start Game').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13060': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTRA A NUESTRA SEDE VIRTUAL >' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'ENTRAR' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13067': async (page: Page) => {
  await page.getByText('Enter exhibition →ENGLISH').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Click to start / Klicke zum Beginnen').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13279': async (page: Page) => {
  await page.getByRole('link', { name: '今すぐスタート' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '問題に進む' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('次へ').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('A何も問題ない').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('解答する').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13352': async (page: Page) => {
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13357': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'INSPIRED... AND READY TO KICK INSPIRED... AND READY TO KICK SOME AS*** SOME AS**' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14796': async (page: Page) => {
  await page.getByText('FFuullll').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'CChhoooossee yyoouurr eexxppeerriieennccee bbaasseedd oonn yyoouurr ddeevviiccee' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14963': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTRY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15698': async (page: Page) => {
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16043': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 633,
      y: 632
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16103': async (page: Page) => {
  await page.getByRole('link', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 613,
      y: 306
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 864,
      y: 162
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 867,
      y: 422
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 486,
      y: 412
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 891,
      y: 290
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 891,
      y: 290
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 865,
      y: 405
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 341,
      y: 272
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 857,
      y: 346
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16196': async (page: Page) => {
  await page.getByRole('button', { name: 'Run' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16218': async (page: Page) => {
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16346': async (page: Page) => {
  await page.locator('#SiteWrapper div').filter({ hasText: 'Trailer Join Now .stCross{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;} Vid' }).getByRole('link', { name: 'Trailer' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17069': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Level 00 01 02 03 04 05 Click to explore' }).locator('canvas').click({
    position: {
      x: 440,
      y: 577
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17079': async (page: Page) => {
  await page.getByRole('button', { name: 'PLAY AGAINST COMPUTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'BEGIN' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17161': async (page: Page) => {
  await page.locator('#startButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17217': async (page: Page) => {
  await page.getByRole('button', { name: 'Okay, I’m ready' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start tour' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17567': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 644,
      y: 384
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17869': async (page: Page) => {
  await page.getByText('360ºTour Virtual').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Sim').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(6) > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18342': async (page: Page) => {
  await page.locator('#gameCanvas').click({
    position: {
      x: 717,
      y: 413
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#gameCanvas').click({
    position: {
      x: 634,
      y: 548
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18462': async (page: Page) => {
  await page.getByText('Explore').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20236': async (page: Page) => {
  await page.getByText('to enable the sound').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20587': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20657': async (page: Page) => {
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21607': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter the FIFPRO gallery' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Enter the FIFPRO gallery' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'22894': async (page: Page) => {
  await page.getByRole('button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'aria.next-button-label' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('[such as Anonymous, c0mrade …]').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23943': async (page: Page) => {
  await page.locator('#fileToUpload').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#fileToUpload').setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Rotate Image 90 Degrees' }).click({
    clickCount: 4
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24467': async (page: Page) => {
  await page.getByRole('link', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('header').getByRole('link').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24657': async (page: Page) => {
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Shopier hızlı alışveriş' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Kapat' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24957': async (page: Page) => {
  await page.locator('#slider i').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'25756': async (page: Page) => {
  await page.getByRole('button', { name: 'EN' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'25859': async (page: Page) => {
  await page.getByRole('link', { name: 'Demo' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '3D' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27631': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27733': async (page: Page) => {
  await page.getByText('C', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('row', { name: 'C1 36 (Cmc21) LCEBR' }).getByRole('link', { name: 'LCEBR' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28456': async (page: Page) => {
  await page.locator('#HeroSection div').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28843': async (page: Page) => {
  await page.getByRole('link', { name: 'Daily Level' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Weekly Demon' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Gauntlets' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28847': async (page: Page) => {
  await page.getByRole('link', { name: 'Yes' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
};
