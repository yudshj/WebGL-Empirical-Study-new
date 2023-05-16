import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.321zaidimai.lt/zaidimai/mahjongg-dimensions');
  await page.frameLocator('#ifr').frameLocator('#game').locator('#prerollOverDiv').click();
  await page.frame({
    url: 'https://ams.cdn.arkadiumhosted.com/assets/game-distribution/game/webgl-mahjongg-dimensions/d7bdf7f9-68ca-45c6-a1e9-128392d2fc4c/?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU=?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU='
  }).locator('canvas').click({
    position: {
      x: 400,
      y: 439
    }
  });
  await page.frame({
    url: 'https://ams.cdn.arkadiumhosted.com/assets/game-distribution/game/webgl-mahjongg-dimensions/d7bdf7f9-68ca-45c6-a1e9-128392d2fc4c/?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU=?show_game_end=false&locale=en-us&device_type=pc&arena_name=gamedistribution.arkadiumarena.com&game_name=Mahjongg%20Dimensions&events=game_start,game_end,pause_ready,event_change,abtest_init,reward_start&play_id=LTUwMTU='
  }).locator('canvas').dblclick({
    position: {
      x: 395,
      y: 537
    }
  });
});