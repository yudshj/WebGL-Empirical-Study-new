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
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
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
  await page.getByRole('textbox').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Submit ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ No ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Choose an image ]' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '[ Choose an image ]' }).setInputFiles('1.jpg');
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
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
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
'01646': async (page: Page) => {
  await page.locator('pg-preloader-button div').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01659': async (page: Page) => {
  await page.locator('.click-zone').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01700': async (page: Page) => {
  await page.locator('input[type="image"]').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01709': async (page: Page) => {
  await page.getByPlaceholder('SET_YOUR_NICKNAME').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Nickname').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '⏵' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#leftBox').getByRole('button', { name: '⏴' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Nickname').press('Enter');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01713': async (page: Page) => {
  await page.getByRole('link', { name: 'Let\'s begin' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01748': async (page: Page) => {
  await page.frameLocator('#post-body-9128308505073031804 iframe').getByRole('button', { name: 'Run Button' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#post-body-9128308505073031804 iframe').getByRole('button', { name: 'Run Button' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01751': async (page: Page) => {
  await page.getByRole('button', { name: 'I Agree to the Updated Terms of Use' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01754': async (page: Page) => {
  await page.locator('#size').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#thickness').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#width').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#shape').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#detail').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01755': async (page: Page) => {
  await page.getByRole('link', { name: 'START!!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01761': async (page: Page) => {
  await page.getByRole('link', { name: 'pre-trained/32-mobilenet.html' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Load Model' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'get Pic' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Predict' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01768': async (page: Page) => {
  await page.getByPlaceholder('Nick').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Nick').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01836': async (page: Page) => {
  await page.getByText('play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01855': async (page: Page) => {
  await page.getByRole('link', { name: 'HD (best for fast connections)' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01860': async (page: Page) => {
  await page.getByText('Play').click();
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
'01890': async (page: Page) => {
  await page.getByText('PRESS ANY KEY TO ENTER').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press(' ');
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
'01924': async (page: Page) => {
  await page.getByRole('link', { name: 'ENTER ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01941': async (page: Page) => {
  await page.getByText('Enter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('div:nth-child(2) > .c0133 > .c0135 > .c0137').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'01948': async (page: Page) => {
  await page.locator('div:nth-child(7) > a').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02022': async (page: Page) => {
  await page.getByRole('img', { name: 'The Forest - a webgl interactive animation inside the origins of Johann Frizon\'s work' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02033': async (page: Page) => {
  await page.getByRole('button', { name: 'enter site' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02044': async (page: Page) => {
  await page.locator('#charttitle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#charttitle').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Generate Chart').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02074': async (page: Page) => {
  await page.getByRole('button', { name: 'Show Solution' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02143': async (page: Page) => {
  await page.getByRole('button', { name: 'Start', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Andrea Blasich Andrea Blasich Sculptor' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02157': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter the World' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02169': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 671,
      y: 420
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02199': async (page: Page) => {
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 404
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02211': async (page: Page) => {
  await page.getByRole('link', { name: 'LAUNCH' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02212': async (page: Page) => {
  await page.getByText('Complete250.0005%of Wikipedia').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('START', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02213': async (page: Page) => {
  await page.getByRole('button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#js-name-you').fill('foo');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#js-name-who').fill('bar');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.pulsatingHeart > svg > use').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02218': async (page: Page) => {
  await page.locator('#siteNavDesktop div').filter({ hasText: 'START' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'02240': async (page: Page) => {
  await page.getByText('ר', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('ז', { exact: true }).click();
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
'02313': async (page: Page) => {
  await page.getByRole('link', { name: 'O K' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02322': async (page: Page) => {
  await page.getByRole('link', { name: 'Перейти на сайт ' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02463': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept Cookies' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'START 3D EXPERIENCE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02479': async (page: Page) => {
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'WEBGL GLOBE COLLECTION' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page2Promise = page1.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.getByRole('link', { name: 'Instagram Followers by Jules Moretti' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page2 = await page2Promise;
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
'02518': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('CONTINUE', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02568': async (page: Page) => {
  await page.locator('#enter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02699': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#country-selection-button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('option', { name: 'USA' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('DD').fill('01');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('MM').fill('01');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('YYYY').fill('1980');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'02952': async (page: Page) => {
  await page.getByRole('button', { name: 'Akceptuję i kontynuuję' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03025': async (page: Page) => {
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03047': async (page: Page) => {
  await page.getByRole('button', { name: 'Explore my world ' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03130': async (page: Page) => {
  await page.getByRole('button', { name: 'Tout accepter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03160': async (page: Page) => {
  await page.getByRole('link', { name: '˅' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Visit the exhibition' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.picto').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03299': async (page: Page) => {
  await page.getByText('MEDIU').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03402': async (page: Page) => {
  await page.getByRole('button', { name: 'Charge into history' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('heading', { name: 'Click on hotspots to explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'03471': async (page: Page) => {
  await page.locator('div:nth-child(3) > div:nth-child(29) > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03488': async (page: Page) => {
  await page.locator('.button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Okay').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Got it!').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03575': async (page: Page) => {
  await page.getByRole('button', { name: 'dismiss cookie message' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('circle').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'03619': async (page: Page) => {
  await page.locator('.landing-4 > img:nth-child(2)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03620': async (page: Page) => {
  await page.locator('#preloader-container div').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03649': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Print. Video. Writing.' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'03660': async (page: Page) => {
  await page.getByRole('link', { name: 'Motion Wave' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('#tour-button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03773': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter the Monument' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03891': async (page: Page) => {
  await page.getByRole('button', { name: 'e n t r y' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'03906': async (page: Page) => {
  await page.locator('div:nth-child(3) > div:nth-child(13) > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.ggskin > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04065': async (page: Page) => {
  await page.getByText('Click & Hold').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04079': async (page: Page) => {
  await page.getByText('starten').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('normal für langsame Internetverbindungen empfohlen').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04081': async (page: Page) => {
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'04087': async (page: Page) => {
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04125': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 659,
      y: 513
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 665,
      y: 380
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 447,
      y: 367
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 710,
      y: 619
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04145': async (page: Page) => {
  await page.frameLocator('#game-area').locator('#onetrust-banner-sdk').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04147': async (page: Page) => {
  await page.locator('#canvas').click({
    position: {
      x: 1079,
      y: 625
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#canvas').click({
    position: {
      x: 1080,
      y: 631
    }
  });
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
'04153': async (page: Page) => {
  await page.frameLocator('#game iframe').frameLocator('iframe').locator('#gameContainer').click({
    position: {
      x: 643,
      y: 485
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04155': async (page: Page) => {
  await page.getByRole('spinbutton').fill('111.0');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04160': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Start' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04164': async (page: Page) => {
  await page.locator('#cursor').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Hold the spacebar').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press(' ', { delay: 10_000 });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04167': async (page: Page) => {
  await page.getByText('start').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04169': async (page: Page) => {
  await page.getByRole('button', { name: 'Explorer le navire' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04243': async (page: Page) => {
  await page.locator('div:nth-child(2) > img').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04247': async (page: Page) => {
  await page.locator('#canvas').click({
    position: {
      x: 1227,
      y: 235
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'04260': async (page: Page) => {
  await page.getByText('Let\'s make some!').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04262': async (page: Page) => {
  await page.getByRole('button', { name: '同意する' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom out' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04410': async (page: Page) => {
  await page.locator('.icon-play > span').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04421': async (page: Page) => {
  await page.getByRole('link', { name: 'DISCOVERY MODE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'LAUNCH' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04429': async (page: Page) => {
  await page.getByRole('link', { name: '– English' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04499': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('I Agree').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#hero-lightpass').click({
    position: {
      x: 721,
      y: 905
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'04572': async (page: Page) => {
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04573': async (page: Page) => {
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04582': async (page: Page) => {
  await page.getByRole('link', { name: 'Light' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04599': async (page: Page) => {
  await page.getByText('男性').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('画像を選択する').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('AIがあなたの顔面成分を測定 AIどうぶつ顔診断 診断してみる このサイトではAIがあなたの顔面成分を分析します。 顔面成分は「ねこ」「いぬ」「たぬき」「きつね').setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('この画像で診断').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04699': async (page: Page) => {
  await page.locator('#ss-btn').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04718': async (page: Page) => {
  await page.getByText('experience', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04918': async (page: Page) => {
  await page.locator('.thumb').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04921': async (page: Page) => {
  await page.locator('#dropZoneInputEl').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#dropZoneInputEl').setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04930': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'04991': async (page: Page) => {
  await page.getByText('Ready! Click or press any key to enter.').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.home__wrapper').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.home__wrapper').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.home__wrapper').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.home__wrapper').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05068': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 604,
      y: 434
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 953,
      y: 387
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 1072,
      y: 635
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 1060,
      y: 616
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 497,
      y: 334
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 641,
      y: 620
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 577,
      y: 339
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 649,
      y: 611
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05100': async (page: Page) => {
  await page.getByRole('button', { name: 'Start viewing' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Next' }).click();
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
'05149': async (page: Page) => {
  await page.locator('#application-canvas').click({
    position: {
      x: 171,
      y: 629
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05167': async (page: Page) => {
  await page.getByRole('button', { name: 'Iniciar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nome').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nome').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nome').press('Enter');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#nome').press('Enter');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).dblclick();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05175': async (page: Page) => {
  await page.getByRole('link', { name: ' 3D' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: 'Alien nature' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05202': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('.gallery-asset > img').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 682,
      y: 416
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 562,
      y: 249
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 719,
      y: 228
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05207': async (page: Page) => {
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05208': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Close' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05209': async (page: Page) => {
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05211': async (page: Page) => {
  await page.getByRole('button', { name: '启动实验' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05213': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05216': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05220': async (page: Page) => {
  await page.getByRole('button', { name: 'Launch experiment' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('[id="\\31 "]').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05229': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('[id="\\30 "]').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05231': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05233': async (page: Page) => {
  await page.getByRole('button', { name: 'Play game' }).click();
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
'05238': async (page: Page) => {
  await page.getByText('S T A R T').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05239': async (page: Page) => {
  await page.getByText('START', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05316': async (page: Page) => {
  await page.getByRole('button', { name: 'scroll down' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05326': async (page: Page) => {
  await page.getByRole('img', { name: 'Falling person' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'05447': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 558
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 1010,
      y: 579
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 1011,
      y: 474
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 966,
      y: 558
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 981,
      y: 553
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 954,
      y: 489
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05448': async (page: Page) => {
  await page.getByRole('button', { name: 'Start exploring' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05606': async (page: Page) => {
  await page.getByText('Начать Игру').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Создать').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05667': async (page: Page) => {
  await page.getByRole('link', { name: 'Yes, I am of legal drinking age' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('body').press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'05678': async (page: Page) => {
  await page.locator('#startWebsite').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05798': async (page: Page) => {
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05851': async (page: Page) => {
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05852': async (page: Page) => {
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05905': async (page: Page) => {
  await page.getByRole('button', { name: 'Start the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'05959': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06060': async (page: Page) => {
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#gameContainer').click({
    position: {
      x: 789,
      y: 548
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06061': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 297,
      y: 419
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06167': async (page: Page) => {
  await page.getByText('Freeplay').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06176': async (page: Page) => {
  await page.frameLocator('#iframehtml5').frameLocator('#iframehtml5').getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06249': async (page: Page) => {
  await page.getByText('Start', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#yui_3_18_1_1_1684248188736_968').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#yui_3_18_1_1_1684248188736_1013').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#yui_3_18_1_1_1684248188736_1190').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06324': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06486': async (page: Page) => {
  await page.keyboard.press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'06531': async (page: Page) => {
  await page.getByRole('link', { name: 'н а ш е у с л у г е' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06587': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 601,
      y: 386
    },
    delay: 10_000
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06611': async (page: Page) => {
  await page.getByRole('button', { name: 'Click to start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox').press('Enter');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Create Room' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Create' }).click();
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
'06636': async (page: Page) => {
  await page.locator('#opening circle').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06638': async (page: Page) => {
  await page.locator('.startbtn').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06660': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Click anywhere to enable the soundto start' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06747': async (page: Page) => {
  await page.getByRole('button', { name: 'Kijk hier!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06815': async (page: Page) => {
  await page.locator('circle').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#main-stage').click({
    position: {
      x: 626,
      y: 424
    }
  });
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
'06936': async (page: Page) => {
  await page.frameLocator('iframe[name="CodePen"]').getByText('play_arrow pause').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06938': async (page: Page) => {
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(15)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[name="CodePen"]').locator('.keyboard > div:nth-child(29)').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'06977': async (page: Page) => {
  await page.getByRole('link', { name: 'Let\'s see together' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07083': async (page: Page) => {
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Select' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Select' }).setInputFiles('mobilenetv2-12.onnx');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Convert' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07150': async (page: Page) => {
  await page.getByRole('button', { name: 'GO' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07204': async (page: Page) => {
  await page.getByRole('link', { name: 'P L A Y N O W' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07228': async (page: Page) => {
  await page.getByRole('button', { name: 'Permitir todo' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'CREAR COCINA GUIADA' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07308': async (page: Page) => {
  await page.getByRole('button', { name: 'PLAY NOW!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07336': async (page: Page) => {
  await page.locator('#hyper').getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07340': async (page: Page) => {
  await page.getByRole('link', { name: 'START DESIGNING' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07489': async (page: Page) => {
  await page.getByText('Next Image').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Next Image').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#editor').click({
    position: {
      x: 469,
      y: 72
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#editor').click({
    position: {
      x: 487,
      y: 48
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#editor').click({
    position: {
      x: 508,
      y: 55
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Next Image').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Next Image').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07490': async (page: Page) => {
  await page.getByText('1M').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07491': async (page: Page) => {
  await page.getByText('Start').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07492': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 486,
      y: 270
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 695,
      y: 280
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 422,
      y: 452
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07529': async (page: Page) => {
  await page.getByRole('button', { name: 'Start 3D Experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07582': async (page: Page) => {
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^Play$/ }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07608': async (page: Page) => {
  await page.frameLocator('#viewport').getByText('.cls-1 { fill: none; stroke: #fff; stroke-width: 4.43px; fill-rule: evenodd; } S').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07724': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter site' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07738': async (page: Page) => {
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07775': async (page: Page) => {
  await page.locator('map').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('img:nth-child(2)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07868': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 651,
      y: 421
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 591,
      y: 387
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 573,
      y: 374
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07915': async (page: Page) => {
  await page.locator('#canvas_ui').click({
    position: {
      x: 1046,
      y: 614
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'07939': async (page: Page) => {
  await page.getByRole('button', { name: 'Begin Your Journey' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08180': async (page: Page) => {
  await page.locator('div').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08191': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER EXPERIENCE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08245': async (page: Page) => {
  await page.locator('div:nth-child(6)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(6)').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08402': async (page: Page) => {
  await page.locator('#renderCanvas').click({
    position: {
      x: 497,
      y: 528
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 973,
      y: 237
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 950,
      y: 259
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#renderCanvas').click({
    position: {
      x: 936,
      y: 291
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08412': async (page: Page) => {
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Solo Mode').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08513': async (page: Page) => {
  await page.getByRole('link', { name: 'Close' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div:nth-child(3) > div:nth-child(14) > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08526': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08534': async (page: Page) => {
  await page.locator('#root div').filter({ hasText: 'Parcourez les étapes du cycle de l\'eau par Veolia à travers le périple d\'une pet' }).locator('div').nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08548': async (page: Page) => {
  await page.getByRole('button', { name: 'Start now!' }).click();
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
'08621': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08625': async (page: Page) => {
  await page.getByText('Click and Hold To start Swipe up To start Skip').click({ button: "left", delay: 10_000 });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08807': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 619,
      y: 564
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 779,
      y: 624
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08920': async (page: Page) => {
  await page.getByText('KG0516 Karol GSTART EXPERIENCELegalLegalPrivacy CenterPrivacy Center© 2021 Spoti').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Stage').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#Stage').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'08980': async (page: Page) => {
  await page.getByRole('link', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09059': async (page: Page) => {
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start the game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09060': async (page: Page) => {
  await page.getByText('I\'m Ready').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('LET’S GO BABY').click();
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
'09145': async (page: Page) => {
  await page.getByRole('link', { name: 'ПРОЙТИ ТРЕНИРОВКУ' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09192': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 782,
      y: 495
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 764,
      y: 493
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 765,
      y: 493
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 765,
      y: 493
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
'09200': async (page: Page) => {
  await page.getByRole('button', { name: 'enter the experience enter the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09206': async (page: Page) => {
  await page.locator('#title-list').getByText('Genshin Impact').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('listitem').filter({ hasText: 'Lumine' }).getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#model-list-items').getByText('Aether').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09207': async (page: Page) => {
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09277': async (page: Page) => {
  await page.getByRole('button', { name: 'E n t e r t h e E x p e r i e n c e' }).click();
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
'09430': async (page: Page) => {
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Zoom in' }).click();
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
'09472': async (page: Page) => {
  await page.getByRole('link', { name: 'Edit cranky-keller-cp4ms' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09477': async (page: Page) => {
  await page.getByRole('link', { name: 'https://codepen.io/jasonmayes/pen/GRJqgma' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09489': async (page: Page) => {
  await page.getByRole('link', { name: 'live version here' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09490': async (page: Page) => {
  await page.getByRole('link', { name: 'here', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.tensorsite-content__cta').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.goto('https://holobooth.flutter.dev/#/');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.goto('https://holobooth.flutter.dev/');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.goto('https://holobooth.flutter.dev/#/');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.locator('flt-glass-pane').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page1.locator('flt-glass-pane').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09506': async (page: Page) => {
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09513': async (page: Page) => {
  await page.getByRole('button', { name: 'enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09547': async (page: Page) => {
  await page.getByText('start', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09750': async (page: Page) => {
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'skip tutorial' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09751': async (page: Page) => {
  await page.getByText('Play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Skip').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09759': async (page: Page) => {
  await page.getByRole('button', { name: 'ACCEPT ALL COOKIES' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#startButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09825': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 641,
      y: 483
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 66,
      y: 67
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 991,
      y: 398
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 188,
      y: 462
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09826': async (page: Page) => {
  await page.locator('#close-btn-start').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09828': async (page: Page) => {
  await page.getByRole('button', { name: 'ON' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'LET’S FIRE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('label').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('100 LIG HANABI SWEET SUMMER MEMORIES PLEASE SELECT THE SOUND WE RECOMMEND THE SO').setInputFiles('1.jpg');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('140 characters or less.').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('140 characters or less.').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('listitem').filter({ hasText: 'KIKU' }).getByRole('button').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '忘' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'IN MIND' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'IN MIND' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('paragraph').filter({ hasText: 'FIRE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'SHOUT' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'SHOUT' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09848': async (page: Page) => {
  await page.getByText('NEXT').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('NEXT').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09907': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09941': async (page: Page) => {
  await page.locator('div').filter({ hasText: /^SKY VIEW$/ }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^Group 3868$/ }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^Night Aerial 360°$/ }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09942': async (page: Page) => {
  await page.getByRole('button', { name: 'Learn!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Learn!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09946': async (page: Page) => {
  await page.getByRole('button', { name: 'Run experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game_drop').locator('body').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game_drop').locator('body').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#game_drop').locator('body').click({
    clickCount: 8
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'09961': async (page: Page) => {
  await page.getByRole('button', { name: 'Step inside 100%' }).click();
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
'10085': async (page: Page) => {
  await page.locator('#gameContainer').click({
    position: {
      x: 759,
      y: 567
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10094': async (page: Page) => {
  await page.locator('#Enter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10222': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 196,
      y: 585
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    clickCount: 4,
    position: {
      x: 204,
      y: 532
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 218,
      y: 581
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10348': async (page: Page) => {
  await page.getByRole('link', { name: 'ENTER' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10486': async (page: Page) => {
  await page.locator('#UpperCanvas').click({
    position: {
      x: 408,
      y: 425
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10552': async (page: Page) => {
  await page.locator('.arrowToProject').click();
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
'10763': async (page: Page) => {
  await page.getByRole('button', { name: 'Kabul Et' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10769': async (page: Page) => {
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 455,
      y: 450
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10772': async (page: Page) => {
  await page.getByRole('link', { name: 'CLICK' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10797': async (page: Page) => {
  await page.getByRole('button', { name: 'Ative o som' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10809': async (page: Page) => {
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10846': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTER SITE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'10862': async (page: Page) => {
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11178': async (page: Page) => {
  await page.getByRole('button', { name: 'Start Experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11233': async (page: Page) => {
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Guide me to a kitchen' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11254': async (page: Page) => {
  await page.frameLocator('internal:text="Your browser doesn\'t support this content."i').locator('#canvas').click({
    position: {
      x: 807,
      y: 488
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('internal:text="Your browser doesn\'t support this content."i').locator('#canvas').click({
    position: {
      x: 600,
      y: 477
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11316': async (page: Page) => {
  await page.locator('#showUnity').check();
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
'11324': async (page: Page) => {
  await page.getByRole('button', { name: 'Let’s Go' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start Game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('check out this experiment in 360').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11329': async (page: Page) => {
  await page.locator('circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('circle').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11358': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Surprise ! Try it ! Find The Easter egg. K M C 滑鼠左鍵 以及點擊鍵盤 任意鍵 可以關閉提示 ※ Cookie 提' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11482': async (page: Page) => {
  await page.getByRole('combobox').selectOption('maliluosi_3_doa');
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
'11785': async (page: Page) => {
  await page.getByRole('link', { name: 'Draw' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 732,
      y: 338
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 601,
      y: 346
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#draw-container').locator('canvas').click({
    position: {
      x: 952,
      y: 369
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Drag' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 717,
      y: 453
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 967,
      y: 241
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 291,
      y: 332
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 885,
      y: 366
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 664,
      y: 413
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#drag-container').locator('canvas').click({
    position: {
      x: 1056,
      y: 620
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'11872': async (page: Page) => {
  await page.getByRole('button', { name: 'Explore', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 672
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 664
    }
  });
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
'11984': async (page: Page) => {
  await page.locator('.slogan > a').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12070': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 654,
      y: 607
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12076': async (page: Page) => {
  await page.getByRole('button', { name: '球体' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '螺旋' }).click();
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
'12142': async (page: Page) => {
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('body').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12320': async (page: Page) => {
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: '3D model. Use mouse, touch or arrow keys to move.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12388': async (page: Page) => {
  await page.getByText('PRESS HERE TO START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12412': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 274,
      y: 336
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12421': async (page: Page) => {
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Profile' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Profile' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Profile' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Profile' }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12466': async (page: Page) => {
  await page.getByRole('link', { name: 'Start the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Welcome to the #MaxMaraBearingGifts Factory. Follow #MaxTheTeddy100%Hi! Please S').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'12487': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12536': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12656': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter world' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12686': async (page: Page) => {
  await page.getByRole('button', { name: '메인 왼쪽 버튼 개인 전시 제작·관람' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('list').filter({ hasText: '최소희 개인전 <결계 結界>서금앵 개인전 <그대 머문 자리 Where you stayed>장윤지 개인전 <우리가 밤에 본 것들 What we s' }).getByRole('img', { name: '최소희 개인전 <결계 結界>' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page2Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: '전시 입장하기' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page2 = await page2Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page2.goto('https://meum.me/meum/%EB%AF%80%EB%AF%B8/1724');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12782': async (page: Page) => {
  await page.getByRole('button', { name: 'PLAY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12835': async (page: Page) => {
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Train' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Run' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#defaultCanvas0').click({
    position: {
      x: 262,
      y: 292
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.press('#defaultCanvas0', ' ');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12840': async (page: Page) => {
  await page.getByRole('cell', { name: 'Start the game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('cell', { name: 'Sheyvanin' }).getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'12882': async (page: Page) => {
  await page.getByRole('link', { name: 'S t a r t' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13037': async (page: Page) => {
  await page.locator('.bg').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.bg').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').first().click({
    position: {
      x: 675,
      y: 292
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').first().click({
    position: {
      x: 675,
      y: 292
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').first().click({
    position: {
      x: 666,
      y: 284
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13060': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTRA A NUESTRA SEDE VIRTUAL >' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'ENTRAR' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13063': async (page: Page) => {
  await page.getByRole('link', { name: '5 ENTRAR E' }).click();
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
'13282': async (page: Page) => {
  await page.getByRole('button', { name: 'QUICK START' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13321': async (page: Page) => {
  await page.getByRole('link', { name: 'On', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13333': async (page: Page) => {
  await page.getByRole('button', { name: 'Start Exploring' }).click();
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
'13645': async (page: Page) => {
  await page.getByRole('button', { name: 'Get Started' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13693': async (page: Page) => {
  await page.getByRole('link', { name: 'Selengkapnya', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13723': async (page: Page) => {
  await page.locator('#squeezeBtnHero').getByRole('link', { name: 'Contact us for more information' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'13752': async (page: Page) => {
  await page.locator('#gameContainer').click({
    position: {
      x: 806,
      y: 548
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14096': async (page: Page) => {
  await page.locator('#startWebsite').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'14112': async (page: Page) => {
  await page.getByRole('link', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14274': async (page: Page) => {
  await page.locator('div:nth-child(3) > div:nth-child(29) > div').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14295': async (page: Page) => {
  await page.getByRole('button', { name: 'play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14311': async (page: Page) => {
  await page.locator('#canvas_screens').click({
    position: {
      x: 317,
      y: 513
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#canvas_screens').click({
    position: {
      x: 304,
      y: 507
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14334': async (page: Page) => {
  await page.getByRole('button', { name: 'loading... enter with sound' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'accept' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('section').filter({ hasText: 'SCROLL DOWN' }).getByRole('img').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'14381': async (page: Page) => {
  await page.getByRole('link', { name: 'Party City Multiplayer Battle with other fleets in a wild map with lots of laughs Play Now slow [353ms] players: 0' }).getByRole('button', { name: 'Play Now' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14425': async (page: Page) => {
  await page.getByRole('link', { name: 'muplus' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('video').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'14503': async (page: Page) => {
  await page.locator('.onetrust-pc-dark-filter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('alertdialog', { name: 'Privacy' }).getByRole('button', { name: 'Close' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Enter the experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14746': async (page: Page) => {
  await page.getByText('CLICK TO ENTER').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14796': async (page: Page) => {
  await page.getByText('FFuullll').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: 'CChhoooossee yyoouurr eexxppeerriieennccee bbaasseedd oonn yyoouurr ddeevviiccee' }).nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14803': async (page: Page) => {
  await page.getByRole('link', { name: 'Get Started' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('flt-glass-pane').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14840': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 559,
      y: 497
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 548,
      y: 370
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14862': async (page: Page) => {
  await page.locator('#selectIconNext').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#selectIconNext').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#selectIconNext').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#selectIconNext').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#selectIconNext').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14937': async (page: Page) => {
  await page.getByText('0%Start Experience').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14963': async (page: Page) => {
  await page.getByRole('button', { name: 'ENTRY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'14993': async (page: Page) => {
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15109': async (page: Page) => {
  await page.getByRole('link', { name: '' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').first().click({
    position: {
      x: 148,
      y: 145
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').nth(1).click({
    position: {
      x: 169,
      y: 188
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').nth(2).click({
    position: {
      x: 211,
      y: 176
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').nth(2).click({
    position: {
      x: 151,
      y: 176
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15173': async (page: Page) => {
  await page.locator('circle').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15207': async (page: Page) => {
  await page.locator('#play-arrow').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15208': async (page: Page) => {
  await page.locator('#play-arrow').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15214': async (page: Page) => {
  await page.getByRole('link', { name: 'c l i c k h e r e t o e n t e r' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('main').locator('div').filter({ hasText: '001 Où est Jean-Luc June 2022' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15469': async (page: Page) => {
  await page.getByRole('button', { name: 'Jouer' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15591': async (page: Page) => {
  await page.getByRole('button', { name: 'Start experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15695': async (page: Page) => {
  await page.getByRole('button', { name: 'Timed challenge' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start challenge' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15698': async (page: Page) => {
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15726': async (page: Page) => {
  await page.locator('#btn_play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15727': async (page: Page) => {
  await page.locator('#btn_play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15739': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15829': async (page: Page) => {
  await page.getByRole('button', { name: 'LIVE THIS STORY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'skip' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'15842': async (page: Page) => {
  await page.locator('#ENTER_container').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16042': async (page: Page) => {
  await page.locator('#gameCanvas').click({
    position: {
      x: 625,
      y: 573
    }
  });
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
'16100': async (page: Page) => {
  await page.getByRole('button', { name: 'Play Now!' }).click();
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
'16163': async (page: Page) => {
  await page.getByText('ENTER', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('DESKTOP / VR').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#skip_instructions_desk').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16177': async (page: Page) => {
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 476,
      y: 228
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 478,
      y: 204
    }
  });
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
'16280': async (page: Page) => {
  await page.getByText('How to play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Pick a role').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Not it!').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16290': async (page: Page) => {
  await page.getByText('Let\'s Rock!').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Skip').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('app-preloader').getByText('Pull').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16326': async (page: Page) => {
  await page.getByRole('button', { name: 'Play' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16328': async (page: Page) => {
  await page.getByRole('link', { name: 'Race', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('LET\'S GET STARTED').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('LET\'S GET STARTED').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16346': async (page: Page) => {
  await page.locator('#SiteWrapper div').filter({ hasText: 'Trailer Join Now .stCross{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;} Vid' }).getByRole('link', { name: 'Trailer' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16363': async (page: Page) => {
  await page.getByText('Начать работу').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16370': async (page: Page) => {
  await page.getByText('点击进入').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16376': async (page: Page) => {
  await page.getByRole('link', { name: 'Explore', exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16385': async (page: Page) => {
  await page.getByText('START GAME').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16484': async (page: Page) => {
  await page.getByRole('button', { name: 'Good' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Let’s go!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'CHECK To find out how much we fit together, take the docking test' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'We will discuss everything in correspondence.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'We don\'t mind, but you have to respect the boundaries.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Outsourcing by fix or labor costs.\nWe just need money, a lot of money, give us more money.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Less than 100 $.' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Restart' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16510': async (page: Page) => {
  await page.frameLocator('iframe[title="Sugar Honeycombs - Squid Game"]').frameLocator('#embed').locator('#unity-canvas').click({
    position: {
      x: 628,
      y: 521
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16577': async (page: Page) => {
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16698': async (page: Page) => {
  await page.locator('.fa').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16762': async (page: Page) => {
  await page.getByRole('button', { name: 'b e g i n' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16822': async (page: Page) => {
  await page.press('body', ' ');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'16883': async (page: Page) => {
  await page.getByPlaceholder('Type your message or Start Speaking ...').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByPlaceholder('Type your message or Start Speaking ...').fill('hello');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17062': async (page: Page) => {
  await page.getByText('EXPLORE').click();
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
'17092': async (page: Page) => {
  await page.getByRole('textbox', { name: 'Your name' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox', { name: 'Your name' }).fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'PLAY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17160': async (page: Page) => {
  await page.locator('#Layer_1').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: '.st0{display:none}.st1{display:inline}.st2,.st3{stroke:#000}.st2{clip-path:url(#' }).first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17161': async (page: Page) => {
  await page.locator('#startButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17198': async (page: Page) => {
  await page.getByRole('link', { name: '100 ENTER' }).click();
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
'17233': async (page: Page) => {
  await page.getByText('Start', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17421': async (page: Page) => {
  await page.frameLocator('iframe[title="Tug-of-War - Squid Game"]').frameLocator('#embed').locator('#unity-canvas').click({
    position: {
      x: 606,
      y: 529
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17535': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'Go' }).click();
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
'17578': async (page: Page) => {
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17645': async (page: Page) => {
  await page.getByRole('link', { name: 'GALERIA 3D' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17650': async (page: Page) => {
  await page.getByText('START EXPERIENCE').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'17679': async (page: Page) => {
  await page.getByRole('button', { name: '×' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Enter').click();
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
'18006': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18337': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 483,
      y: 294
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 499,
      y: 381
    }
  });
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
'18401': async (page: Page) => {
  await page.getByText('Enter Experience').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18445': async (page: Page) => {
  await page.frameLocator('iframe[name="Wilcon Depot "]').locator('[id="\\32 5"] > div:nth-child(2) > div > div').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18462': async (page: Page) => {
  await page.getByText('Explore').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18465': async (page: Page) => {
  await page.getByText('START WALKING').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18486': async (page: Page) => {
  await page.locator('a').filter({ hasText: 'Start in 2DNo Headset Required' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18572': async (page: Page) => {
  await page.getByText('sound on').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18618': async (page: Page) => {
  await page.frameLocator('#ifr').frameLocator('#game').locator('#prerollOverDiv').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frame({
    url: 'https://ams.cdn.arkadiumhosted.com/assets/game-distribution/game/webgl-mahjongg-dimensions/d7bdf7f9-68ca-45c6-a1e9-128392d2fc4c/?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU=?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU='
  }).locator('canvas').click({
    position: {
      x: 400,
      y: 439
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frame({
    url: 'https://ams.cdn.arkadiumhosted.com/assets/game-distribution/game/webgl-mahjongg-dimensions/d7bdf7f9-68ca-45c6-a1e9-128392d2fc4c/?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU=?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU='
  }).locator('canvas').dblclick({
    position: {
      x: 395,
      y: 537
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18641': async (page: Page) => {
  await page.getByRole('button', { name: 'Naar de 3D viewer' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'18869': async (page: Page) => {
  await page.getByRole('link', { name: 'SOUND ON? PLAY' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'19489': async (page: Page) => {
  await page.getByRole('button', { name: 'EMPEZAR' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'19740': async (page: Page) => {
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.boranka-landing__visit-forest > svg > path').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'ok' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'ok' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'ok' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20236': async (page: Page) => {
  await page.getByText('to enable the sound').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20250': async (page: Page) => {
  await page.getByText('Click to play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20255': async (page: Page) => {
  await page.getByRole('link', { name: 'enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: 'discover' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20352': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter Elisus' }).click();
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
'20674': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'CyberBrokers is building a captivating universe through beautiful collectibles, ' }).nth(3).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'20699': async (page: Page) => {
  await page.locator('#volume_announce i').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21042': async (page: Page) => {
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 928,
      y: 610
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    clickCount: 3,
    position: {
      x: 693,
      y: 330
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').dblclick({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 466,
      y: 576
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 501,
      y: 590
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21266': async (page: Page) => {
  await page.getByText('Artistic Penthouse Montreal West Chelsea New York Humminghill farm West Bolton O').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'21488': async (page: Page) => {
  await page.getByText('Start').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21530': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21574': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
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
'21635': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21658': async (page: Page) => {
  await page.getByText('Play').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#hint').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'21771': async (page: Page) => {
  await page.locator('.container3D').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.container3D').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('.container3D').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'22103': async (page: Page) => {
  await page.getByRole('button', { name: 'Ready' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('div').filter({ hasText: /^ManifestoHow we do it$/ }).nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'22361': async (page: Page) => {
  await page.getByRole('link', { name: 'INIZIAMO' }).click();
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
'23278': async (page: Page) => {
  await page.getByRole('button', { name: 's t a r t y o u r j o u r n e y' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23329': async (page: Page) => {
  await page.getByRole('link', { name: 'EXPLORE' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23384': async (page: Page) => {
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByTitle('Next Page').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23537': async (page: Page) => {
  await page.getByRole('img', { name: 'Preloader' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img', { name: 'Preloader' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23615': async (page: Page) => {
  await page.locator('.js_topIntro_cubeButton').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23722': async (page: Page) => {
  await page.getByRole('button', { name: 'VISIT THE SHOWROOM' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'23864': async (page: Page) => {
  await page.getByText('Start the experience').click();
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
'24526': async (page: Page) => {
  await page.getByRole('link', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24589': async (page: Page) => {
  await page.getByRole('button', { name: 'MOREVERSE CLICK TO ENTER' }).click();
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
'24662': async (page: Page) => {
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
},
'24740': async (page: Page) => {
  await page.getByRole('textbox').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('textbox').fill('123');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'Generate code' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24827': async (page: Page) => {
  await page.getByRole('button', { name: 'Let us sing! TON AN!' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'24957': async (page: Page) => {
  await page.locator('#slider i').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'25070': async (page: Page) => {
  await page.locator('canvas').click({
    position: {
      x: 634,
      y: 534
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 550
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('canvas').click({
    clickCount: 3,
    position: {
      x: 649,
      y: 550
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'25162': async (page: Page) => {
  await page.getByText('START').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'25215': async (page: Page) => {
  await page.getByRole('button', { name: 'High' }).click();
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
'25952': async (page: Page) => {
  await page.getByRole('button', { name: 'enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('TAKE A SPIN').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button').filter({ hasText: '.arrowDown{fill:#fff;}' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'26356': async (page: Page) => {
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#modal-load').getByRole('img').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'26554': async (page: Page) => {
  await page.getByText('Click to continue.').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'26686': async (page: Page) => {
  await page.locator('div').filter({ hasText: 'Cookie PolicyWe use cookies to ensure that we give you the best experience on ou' }).getByRole('link', { name: 'Continue' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'26867': async (page: Page) => {
  await page.getByRole('button', { name: 'Begin' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27096': async (page: Page) => {
  await page.getByText('continue', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27191': async (page: Page) => {
  await page.getByRole('link', { name: 'SABER MÁS' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27614': async (page: Page) => {
  await page.getByRole('button', { name: 'Let\'s Begin' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27631': async (page: Page) => {
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27639': async (page: Page) => {
  await page.getByRole('button', { name: 'accept and enter' }).click();
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
'27812': async (page: Page) => {
  const page1Promise = page.waitForEvent('popup');
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('link', { name: '3D Experience' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  const page1 = await page1Promise;
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27821': async (page: Page) => {
  await page.getByRole('button', { name: 'enter' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'click' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'click' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'click' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'click' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27831': async (page: Page) => {
  await page.getByRole('button', { name: 'SOUND ON' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'27929': async (page: Page) => {
  await page.getByRole('button', { name: 'Click To Play Now' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28022': async (page: Page) => {
  await page.getByRole('button', { name: '×' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('Enter').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28254': async (page: Page) => {
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28300': async (page: Page) => {
  await page.getByRole('link', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28435': async (page: Page) => {
  await page.getByRole('button', { name: 'play the game' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28456': async (page: Page) => {
  await page.locator('#HeroSection div').getByRole('link').click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28516': async (page: Page) => {
  await page.frameLocator('internal:text="https://my.treedis.com/tour/what-is-happening-here-gallery-29dc6f68"i').getByRole('button', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28650': async (page: Page) => {
  await page.getByText('A', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('E', { exact: true }).first().click();
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
'28922': async (page: Page) => {
  await page.getByText('Enter', { exact: true }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28945': async (page: Page) => {
  await page.getByRole('link', { name: 'Start' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28948': async (page: Page) => {
  await page.locator('canvas').nth(1).click({
    position: {
      x: 671,
      y: 406
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28976': async (page: Page) => {
  await page.locator('#unity-canvas').click({
    position: {
      x: 680,
      y: 686
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    position: {
      x: 642,
      y: 686
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('#unity-canvas').click({
    clickCount: 3,
    position: {
      x: 642,
      y: 686
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.locator('html').click({
    clickCount: 4
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'28992': async (page: Page) => {
  await page.getByRole('button', { name: 'Let\'s go' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('button', { name: 'I\'d just like to look' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'29000': async (page: Page) => {
  await page.getByRole('link', { name: 'Enter Site' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'29038': async (page: Page) => {
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 727,
      y: 456
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 340,
      y: 149
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 330,
      y: 218
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'29134': async (page: Page) => {
  await page.getByText('next').first().click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByText('next').nth(1).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
'29199': async (page: Page) => {
  await page.getByRole('link', { name: 'POCZĄTEK' }).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
  await page.getByRole('img').nth(2).click();
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {});
},
};
