// canvas width="720" height="480"
// normal chicken img properties 248x243  1/0,97

class Chicken extends MovableObject {
  width = 50;
  height = 50;
  y = 380;
  intervalNrMove = 0;
  intervalNrWalk = 0
  
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
  ]

  offset = {
    left: 1,
    right: 0,
    top: 0,
    bottom: 0,
  };



  constructor() {
    super()
    
    this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
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
    let interval1 = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING)
    }, 250);

    this.intervalNrWalk = interval1
    this.speed = Math.random() * 0.7
    let interval2 =     setInterval(() => {
      this.moveLeft()
    }, 1000 / 60);
    this.intervalNrMove = interval2


  }

enemieDeadAnimation(){
  console.log("animation success");
  this.loadImage("./img/3_enemies_chicken/chicken_normal/2_dead/dead.png")
}
}




