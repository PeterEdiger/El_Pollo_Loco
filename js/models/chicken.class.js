// canvas width="720" height="480"
// normal chicken img properties 248x243  1/0,97

class Chicken extends MovableObject {
  width = 50;
  height = 50;
  y = 380;
  IMAGES_WALKING = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];


  constructor() {
    super()
    
    this.loadImage("img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.animate();
  }


  /**
   * Rotates chicken Images simulating moving feet. 
   * Gives every instance a different {Math.random} speed.
   * Calls the {moveLeft} method.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING)
    }, 250);
    
    this.speed = Math.random() * 0.7
    setInterval(() => {
      this.moveLeft()
    }, 1000 / 60);
  }
}



