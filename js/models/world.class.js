// canvas width="720" height="480"


class World {

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }


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
  statusBarHealth = new HealthBar(-100, 20);
  statusBarCoins = new CoinsBar(-100, 50);
  statusBarBottles = new BottlesBar(-100, 80);
  statusBarEndboss = new EndbossBar(20);
  endboss = new Endboss();
  throwableObjects = [];
  bottlesAvailableIndex = 1;
  endBossDyeIndex = 1;


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


  /**
   * Checks if a throwable Object got thrown. 
   * Pushes throwable object into an array.
   * Controlls which Img will be shown in the bottle-status-bar.
   */
  checkThrowObjects() {
    if (this.keyboard.d && this.bottlesAvailableIndex >= 0) {
      let bottleBarImages = this.statusBarBottles.IMAGES;
      console.log(this.bottlesAvailableIndex);
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.statusBarBottles.loadImage(bottleBarImages[this.bottlesAvailableIndex]);
      this.bottlesAvailableIndex -= 1;
    }
  }


  checkStatusBarEndBoss() {
    if (this.character.x > 1500) {
      this.addToCanvas(this.statusBarEndboss);
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
    this.collisionBottleVsEndBoss();
    this.collisionHeroVsEndboss();
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
        if (this.character.y + this.character.offset.top + this.character.height === enemy.y) {
        }
        this.character.hit();
        this.statusBarHealth.setPercentage(this.character.energy);
      }
    });
  }


  coinImgIndex = 1;
  collisionHeroVsCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        let coinBarImages = this.statusBarCoins.IMAGES;
        this.statusBarCoins.loadImage(coinBarImages[this.coinImgIndex]);
        if (this.coinImgIndex < 5) {
          this.coinImgIndex += 1;
          this.level.coins.splice(index, 1);
        }
        console.log("Pepe collides with coin");
      }
    });
  }


  collisionHeroVsBottles() {
    this.level.bottles.forEach((element, index) => {
      if (this.character.isColliding(element)) {
        let bottleBarImages = this.statusBarBottles.IMAGES;
        this.statusBarBottles.loadImage(bottleBarImages[this.bottlesAvailableIndex + 1]);
        if (this.bottlesAvailableIndex < 4) {
          this.bottlesAvailableIndex += 1;
          this.level.bottles.splice(index, 1);
        }
        console.log("Pepe collides with bottle");
      }
    });
  }


  collisionBottleVsEndBoss() {
    this.throwableObjects.forEach((bottle, index) => {
      if (this.endboss.isColliding(bottle)) {
        this.endboss.speed = 0.5;
        let statusBarImgs = this.statusBarEndboss.IMAGES;
        this.statusBarEndboss.loadImage(statusBarImgs[this.endBossDyeIndex]);
        this.endBossDyeIndex++;
        this.throwableObjects.splice(index, 1);
        this.endboss.hurtAnimation(this.endboss.IMAGES_HURT);
        this.endboss.playAnimation(this.endboss.IMAGES_WALKING);
        this.character.bottleHitSound.play();
      }
    }
    );
  }


  collisionHeroVsEndboss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
    }
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
    this.checkStatusBarEndBoss();
    this.character.drawFrame(this.ctx);
    this.endboss.drawFrame(this.ctx);
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
    try {
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    } catch (error) {
      console.warn("Error loading image", error);
      console.log("Could not load image", mo.img.src);
    }
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


