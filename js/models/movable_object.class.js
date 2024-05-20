// canvas width="720" height="480"

class MovableObject extends CollidableObject {
  x;
  y;
  height;
  width;
  img;
  speed;
  otherDirection = false;
  currentIndex = 0;
  speedY = 0;
  offsetY = 0;
  acceleration = 4;
  energy = 100;
  lastHit = 0;

  constructor() {
    super();
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
        if (this.y === 226) {
          this.y = 244;
        }
      }
    }, 1000 / 10);
  }


  /**
   * Threshold definition of y-Axis for an object beeing on ground.
   *
   */
  isAboveGround() {
    return this instanceof ThrowableObject || this.y < 244
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

  jumpFromChicken() {
    this.speedY = 22;
  }


  /**
   *
   *
   */
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
 * @param {number} pointA specified startpoint of span1  
 * @param {number} pointB specified endpoint of span1  
 * @param {number} pointC specified endpoint of span2  
 * @param {number} pointD specified endpoint of span2  
 * 
 * Checks if two specified spans are intersecting. 
*/
  spanIntersection(pointA, pointB, pointC, pointD) {
    return pointA < pointD && pointB > pointC;
  }


  /**
   * @param {instance} obj 
   * 
   * Checks if the {hero} frame and the {obj} frame are intersecting. 
     Resolves to {true} when the {x-spans} and the {y-spans} are colliding. 
   */
  isColliding(obj) {
    return this.spanIntersection(
      this.x + this.offset.left,
      this.x + this.width - this.offset.right,
      obj.x + obj.offset.left,
      obj.x + obj.width - obj.offset.right
    )
      && this.spanIntersection(
        this.y + this.offset.top,
        this.y + this.height - this.offset.bottom,
        obj.y + obj.offset.top,
        obj.y + obj.height - obj.offset.bottom
      );
  }


  isAboveChicken(obj) {
    return this.spanIntersection(
      this.x + this.offset.left,
      this.x + this.width - this.offset.right,
      obj.x + obj.offset.left,
      obj.x + obj.width - obj.offset.right
    )
      && this.spanIntersection(
        this.y + this.height - this.offset.bottom,
        this.y + this.height - this.offset.bottom +5,
        obj.y -5,
        obj.y 
      )
        
      
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
    return timepassed < 0.5;
  }
  //!

  isDead() {
    return this.energy == 0;
  }
}
