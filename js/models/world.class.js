// canvas width="720" height="480"


class World {
  canvas;
  keyboard;
  camera_x = 0;

  level = level1;
  character = new Character();
  enemies = level1.enemies;
  clouds = level1.clouds;
  staticObjects = level1.staticObjects;
  backgrounds = level1.backgrounds;
  endboss = new Endboss();


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }


  setWorld() {
    this.character.world = this;
  }


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
    // draw() gets called multiple times with requestAnimationFrame()
    let self = this;
    requestAnimationFrame(() => { self.draw(); });
  }


  addToCanvas(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    // drawImage waits for positional arguments including (img, y, x-coordinates, width and height of img)

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

    this.ctx.beginPath();
    this.ctx.lineWidth = "2";
    this.ctx.strokeStyle = "blue";
    this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
    this.ctx.stroke()

    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }


  }
}


