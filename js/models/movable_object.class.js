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
  acceleration = 4;


  /**
   * Simulates gravity for objects. 
   *
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 10);
  }

  /**
   * Threshold definition of y-Axis for an object beeing on ground.
   *
   */
  isAboveGround() {
    return this.y < 230;
  }

  /**
   * @param {string} path needed path to create {src for} {img element}
   * Creates an HTML {img element}.
   * Adds a {.src property}  to that {img element} 
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }


  /**
   * @param {Array} array contains img paths
   * Fills {ImgCache} with [key:path] ➔ [value: img element].
   */
  fillImgCache(array) {
    array.forEach(path => {
      let image = new Image();
      image.src = path;
      this.imgCache[path] = image;
    });
  }


  moveRight() {
    this.x += this.speed;
  }


  moveLeft() {
    this.x -= this.speed;
  }


  jump() {
    this.speedY = 30;
  }



isColliding (obj) {
  return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
          (this.y + this.offsety + this.height) >= obj.y &&
          (this.y + this.offsety) <= (obj.y + obj.height) && 
          obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
}

  
/**
 * 
 * @param {array} images that will animate moves of an object.
 * Repeats changing images of an object.
 */
  playAnimation(images) {
    let i = this.currentIndex % images.length;
    this.currentIndex = i;
    this.img = this.imgCache[images[this.currentIndex]];
    this.currentIndex += 1;
  }


  /**
   * @param {2dContext} ctx The 2d Context of the canvas.
   *  Draws a hitbox rectangle around instances of objects.
   */
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

}