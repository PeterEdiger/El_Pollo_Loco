// canvas width="720" height="480"


class Character extends MovableObject {
  x = 60;
  y = 230;
  width = 100;
  height = 200;
  world;
  

  IMAGES_WALKING = [
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ]

  pepeWalkIndex = 0;

  constructor() {
    super().loadImage("./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.animate()
  }



  animate(){
    setInterval(() => {
      let i = this.pepeWalkIndex % this.IMAGES_WALKING.length 
      this.pepeWalkIndex = i
      this.img = this.imgCache[this.IMAGES_WALKING[this.pepeWalkIndex]]
      this.pepeWalkIndex += 1
    }, 250);
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
