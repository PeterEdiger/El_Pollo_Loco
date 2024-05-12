// canvas width="720" height="480"


class World {
  canvas;
  keyboard;
  camera_x;
  ctx; y;
  level = level1;
  character = new Character();
  enemies = level1.enemies;
  clouds = level1.clouds;
  coins = level1.coins;
  bottles = level1.bottles;
  backgrounds = level1.backgrounds;
  statusBarHealth = new StatusBar(-100, 20, "statusBarHealth");
  statusBarCoins = new StatusBar(-100, 50, "statusBarCoins");
  statusBarBottles = new StatusBar(-100, 80, "statusBarBottles");
  endboss = new Endboss();
  throwableObjects = [];


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }


  /**
   * Gives the instance character all methods and properties of world.
   *
   */
  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 100);
  }

  checkThrowObjects() {
    if (this.keyboard.d) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }

  /**
   * Checks if the game character collides with an object. 
   * Decreases the statusBarHealth when the character gets hit. 
   */
  checkCollisions() {
    this.collisionHeroVsEnemy();
    this.collisionHeroVsCoins();
    this.collisionHeroVsBottles();
  }


  collisionHeroVsEnemy() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isAboveChicken(enemy)) {
        clearInterval(enemy.intervalNrWalk);
        clearInterval(enemy.intervalNrMove);
        this.character.jumpFromChicken();
        this.enemies[index].enemieDeadAnimation();
        setTimeout(() => {
          this.enemies.splice(index, 1);
        }, 400);
      }
      else if (this.character.isColliding(enemy)) {
        console.log(enemy.y);
        console.log(this.character.y + this.character.height - this.character.offset.bottom);;
        if (this.character.y + this.character.offset.top + this.character.height === enemy.y) {
        }
        console.log("collision with character", enemy);
        this.character.hit();
        this.statusBarHealth.setPercentage(this.character.energy);
        console.log(this.character.energy);
      }
    });
  }


  collisionHeroVsCoins() {
    this.level.coins.forEach((element, index) => {
      if (this.character.isColliding(element)) {
        this.statusBarCoins.loadImage(this.statusBarCoins.IMAGES.statusBarCoins[0]) ;
        console.log("Pepe collides with coin");
        this.level.coins.splice(index, 1);
      }
    });
  }


  collisionHeroVsBottles() {
    this.level.bottles.forEach((element, index) => {
      if (this.character.isColliding(element)) {
        console.log("Pepe collides with bottle");
        this.level.bottles.splice(index, 1);
      }
    });
  }



  /**
   * Clears the Canvas. 
   * Draws Objects onto the canvas.
   * Uses {requestAnimationFrame} to render the next frame.
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(-this.camera_x, 0);
    this.addObjectsToMap(this.level.backgrounds);
    this.addToCanvas(this.endboss);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addToCanvas(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addToCanvas(this.statusBarHealth);
    this.addToCanvas(this.statusBarCoins);
    this.addToCanvas(this.statusBarBottles);
    this.character.drawFrame(this.ctx);
    this.drawFrameAllInstances(this.enemies);
    this.drawFrameAllInstances(this.coins);
    this.drawFrameAllInstances(this.bottles);


    this.ctx.translate(this.camera_x, 0);
    // requestAnimationFrame cant handle this keyword. Thats why the workaround with self variable.
    let self = this;
    requestAnimationFrame(() => { self.draw(); });
  }


  /**
   * @param {Array} objects An array holding objects getting drawn on the canvas.
   * Adds objects on the canvas 
   */
  addObjectsToMap(objects) {
    objects.forEach(o => {
      this.addToCanvas(o);
    });
  }


  /**
   * @param {object} mo - represents a <movable object>
   * Adds movable objects to the Canvas
   * Draws a Frame around movable Objects 
  */
  addToCanvas(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    // Draws an Image with a certain width, height, x-point and y-point onto the canvas.  
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }

  drawFrameAllInstances(objectsArray) {
    objectsArray.forEach(obj => {
      obj.drawFrame(this.ctx);
    });
  }

}


