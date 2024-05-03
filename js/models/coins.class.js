class Coins extends CollidableObject {

  width = 100; 
  height = 100; 

  IMAGES = [
    "img_pollo_locco/img/8_coin/coin_1.png",
    "img_pollo_locco/img/8_coin/coin_2.png"
  ]

  offset = {
    left: 30,
    right: 30,
    top: 30,
    bottom: 30,
  };


  constructor(){
    super()
    this.loadImage("img_pollo_locco/img/8_coin/coin_1.png")
    this.y = 375 - Math.random() * 250
  }
}
