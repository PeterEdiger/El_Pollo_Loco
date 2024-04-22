
function getRandomCoinY(){
  return 375 - Math.random() * 250  
}



/**
 * All movable and static objects of a level
 * Instatiation at level/level1.js
 */
const level1 = new Level(
  [
    new Chicken(),
  //!  new Chicken(),
  //!  new Chicken(),
  ],

  [
    new Clouds("img_pollo_locco/img/5_background/layers/4_clouds/1.png", 0),
    new Clouds("img_pollo_locco/img/5_background/layers/4_clouds/2.png", 720),
    new Clouds("img_pollo_locco/img/5_background/layers/4_clouds/1.png", 1350),
  ],

  [
    new Background("img_pollo_locco/img/5_background/layers/air.png", -719),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/2.png", -719),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/2.png", -719),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/2.png", -719),
    new Background("img_pollo_locco/img/5_background/layers/air.png", 0),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/1.png", 0),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/1.png", 0),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/1.png", 0),
    new Background("img_pollo_locco/img/5_background/layers/air.png", 719),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/2.png", 719),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/2.png", 719),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/2.png", 719),
    new Background("img_pollo_locco/img/5_background/layers/air.png", 719 * 2),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/1.png", 719 * 2),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/1.png", 719 * 2),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/1.png", 719 * 2),
    new Background("img_pollo_locco/img/5_background/layers/air.png", 719 * 3),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/2.png", 719 * 3),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/2.png", 719 * 3),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/2.png", 719 * 3),
  ],

  [
    // @param (imagePath, width, height, y)
    new staticObject("img_pollo_locco/img/8_coin/coin_2.png", 50, 50, getRandomCoinY() ),
    new staticObject("img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 65, 65,  375),
    new staticObject("img_pollo_locco/img/8_coin/coin_2.png", 100, 100, getRandomCoinY() ),
    // new staticObject("img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 65, 65,  375),
    // new staticObject("img_pollo_locco/img/8_coin/coin_2.png", 100, 100, getRandomCoinY() ),
    // new staticObject("img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 65, 65,  375),
    // new staticObject("img_pollo_locco/img/8_coin/coin_2.png", 100, 100, getRandomCoinY() ),
    // new staticObject("img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 65, 65,  375),
    // new staticObject("img_pollo_locco/img/8_coin/coin_2.png", 100, 100, getRandomCoinY() ),
    // new staticObject("img_pollo_locco/img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 65, 65,  375),
  ]
);