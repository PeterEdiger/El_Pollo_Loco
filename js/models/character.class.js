// canvas width="720" height="480"


class Character extends MovableObject {
  x = 0;
  y = 230;
  width = 100;
  height = 200;
  world;
  speed = 10;
  

  IMAGES_WALKING = [
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ]

walkingSound = new Audio("audio/pepe_running.wav")

  pepeWalkIndex = 0;

  constructor() {
    super().loadImage("./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.animate()
  }


  animate(){
    // Checks for Pepes running direction 
    setInterval(() => {
      this.walkingSound.pause()
      if(this.world.keyboard.right && this.x < this.world.level.levelEndX){
        this.x += this.speed
        this.otherDirection = false
        this.walkingSound.play()
      }
      
      if(this.world.keyboard.left && this.x > -200){
        this.x -= this.speed
        this.otherDirection = true
        this.walkingSound.play()
      }
      this.world.camera_x = -this.x +150
    }, 1000 / 60);

    // Interval for moving Pepes arms and feet.
    setInterval(() => {
      if(this.world.keyboard.right || this.world.keyboard.left){
        let i = this.pepeWalkIndex % this.IMAGES_WALKING.length 
        this.pepeWalkIndex = i
        this.img = this.imgCache[this.IMAGES_WALKING[this.pepeWalkIndex]]
        this.pepeWalkIndex += 1
      }
    }, 40);
  }


  jump() {

  }
}

//! Movable Object reference
// class MovableObject {
//   x;
//   y;
//   height;
//   width;
//   img;
//   imgCache = {};
  
//   loadImage(path) {
//     // Creates an HTML <img ...> element without src. 
//     this.img = new Image();
//     // Adding image src. 
//     this.img.src = path;
//   }

//   fillImgCache(array) {
//     array.forEach(path => {
//       let image = new Image();
//       image.src = path;
//       this.imgCache[path] = path
//     });
//   }
  
//   moveRight() {
//   }
  
//   moveLeft() {
//   }
// }
//! Movable Object reference
