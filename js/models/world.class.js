// canvas width="720" height="480"


class World {
  canvas;
  keyboard;
  camera_x = 0;
  ctx;
  level = level1;
  character = new Character();
  enemies = level1.enemies;
  clouds = level1.clouds;
  staticObjects = level1.staticObjects;
  backgrounds = level1.backgrounds;
  //!
  statusBar = new StatusBar()
  //!
  endboss = new Endboss();

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions()
  }

  /**
   * Gives the instance character all methods and properties of world.
   *
   */
  setWorld() {
    this.character.world = this;
  }


  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach(enemy => {
        if(this.character.isColliding(enemy)){
          console.log("collision with character", enemy)
          this.character.hit()
          console.log(this.character.energy);
        }
      });
    }, 200);
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
    this.level.backgrounds.forEach(background => {
      this.addToCanvas(background);
    });
    this.addToCanvas(this.endboss);
    this.level.staticObjects.forEach(statObj => {
      this.addToCanvas(statObj);
    });
    this.addToCanvas(this.character);
    this.level.enemies.forEach(enemy => {
      this.addToCanvas(enemy);
    });
    this.level.clouds.forEach(cloud => {
      this.addToCanvas(cloud);
    });

    this.ctx.translate(this.camera_x, 0);

    // requestAnimationFrame cant handle this keyword. Thats why the workaround with self variable.
    let self = this;

    requestAnimationFrame(() => { self.draw(); });
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
    
    mo.drawFrame(this.ctx);
    
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}


