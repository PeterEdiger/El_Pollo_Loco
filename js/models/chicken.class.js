// canvas width="720" height="480"
// normal chicken img properties 248x243  1/0,97

class Chicken extends MovableObject {
  width = 50;
  height = 50;
  y = 380;


  constructor() {
    super().loadImage("img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  IMAGES_WALKING = [
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];


  animate() {
    // Interval for moving chicken feet
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING)
    }, 250);
    
    this.speed = Math.random() * 0.7
    setInterval(() => {
      this.moveLeft()
    }, 1000 / 60);
  }
}



//! Movable Object reference
// class MovableObject {
//   x = 120;
//   y = 200;  
//   img;
//   height = 150;
//   width = 100;

//   loadImage(path) {
//     // Creates an HTML <img ...> element without src. 
//     this.img = new Image();
//     // Adding image src. 
//     this.img.src = path;
//   }

//   moveRight() {
//   }

//   moveLeft() {
//   }
// }
//! Movable Object reference

