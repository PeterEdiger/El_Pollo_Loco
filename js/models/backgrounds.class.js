// canvas width="720" height="480"

class Background extends MovableObject {

  width = 720;
  x = 0;
  
  constructor(path, y, height) {
    super().loadImage(path);
    this.y = y;
    this.height = height;
  }
}


//! movable Object reference
// class MovableObject {
//   x;
//   y;  
//   height;
//   width;
//   img;

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
//! movable Object reference