// canvas width="720" height="480"

class MovableObject {
  x;
  y;
  height;
  width;
  img;
  imgCache = {};
  speed;
  otherDirection = false;
  currentIndex = 0
 
  loadImage(path) {
    // Creates an HTML <img ...> element without src. 
    this.img = new Image();
    // Adding image src. 
    this.img.src = path;
  }

  fillImgCache(array) {
    array.forEach(path => {
      let image = new Image();
      image.src = path;
      this.imgCache[path] = image;
    });
  }

  moveRight() {
  }

  moveLeft(speed) {
    setInterval(() => {
      this.x -= speed;
    }, 1000 / 60);
  }

  playAnimation(images){
    let i = this.currentIndex % images.length 
    this.currentIndex = i
    this.img = this.imgCache[images[this.currentIndex]]
    this.pepeWalkIndex += 1

  }
}