// canvas width="720" height="480"

class MovableObject extends DrawableObject {
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
  offsetY = 0;
  acceleration = 4;
  energy = 100;
  lastHit = 0;

  constructor(){
   super()
  }

  
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
    if(!(this instanceof ThrowableObject)){
      return this.y < 230;
    }else {
      return true
    }
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

  deadAnimation(images) {
    if (this.dyingIndex < images.length) {
      this.img = this.imgCache[images[this.dyingIndex]];
      this.dyingIndex += 1;
    }
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



  /**
 * @param {number} pointA specified startpoint of span1  
 * @param {number} pointB specified endpoint of span1  
 * @param {number} pointC specified endpoint of span2  
 * @param {number} pointD specified endpoint of span2  
 * 
 * Checks if two specified spans are not intersecting. 
*/
  spanIntersection(pointA, pointB, pointC, pointD) {
    return pointA < pointD && pointB > pointC;
  }


/**
 * @param {instance} obj 
 * 
 * Checks if the {obj} frame and the {.this} frame are intersecting. 
   Resolves to {true} when the {x-spans} and the {y-spans} are colliding. 
 */
  isColliding(obj) {
    return this.spanIntersection(this.x, this.x + this.width, obj.x, obj.x + obj.width) &&
      this.spanIntersection(this.y, this.y + this.height, obj.y, obj.y + obj.height);
  }


  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    }
    else {
      this.lastHit = new Date().getTime();
    }
  }


  //!
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 3;
  }
  //!

  isDead() {
    return this.energy == 0;
  }
}
