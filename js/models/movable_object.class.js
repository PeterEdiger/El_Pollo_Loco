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
  currentIndex = 0;
  speedY = 0;
  acceleration = 1;


  applyGravity() {
      setInterval(() => {
        if(this.isAboveGround() || this.speedY > 0){
          this.speedY -= this.acceleration;
          this.y -= this.speedY;
        }
      }, 1000 / 10)
    }
  
  isAboveGround(){
    return this.y < 230;
  }

  loadImage(path) {
    // Creates an HTML <img ...> element without src. 
    this.img = new Image();
    // Adding image src. 
    this.img.src = path;
  }

  // Takes an array, fills the <imgCache dict>
  //  {imgPath: HTMLimgElement}
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

  playAnimation(images) {
    let i = this.currentIndex % images.length;
    this.currentIndex = i;
    this.img = this.imgCache[images[this.currentIndex]];
    this.currentIndex += 1;
  }
}