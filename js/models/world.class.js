// canvas width="720" height="480"


class World {
  character = new Character();
  enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken()
  ];
  
  cloud = new Clouds();
  
  backgrounds = [
    new Background("img_pollo_locco/img/5_background/layers/air.png", 0, 480),
    new Background("img_pollo_locco/img/5_background/layers/3_third_layer/full.png", 0, 480),
    new Background("img_pollo_locco/img/5_background/layers/2_second_layer/full.png", 0, 480),
    new Background("img_pollo_locco/img/5_background/layers/1_first_layer/full.png", 0, 480),
  ];
  
  canvas;
  keyboard;
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
    this.backgrounds.forEach(background => {
      this.addToCanvas(background);
    });
    this.addToCanvas(this.character);
    this.enemies.forEach(enemy => {
      this.addToCanvas(enemy);
    });
    this.addToCanvas(this.cloud);
    // requestAnimationFrame cant handle this keyword. Thats why the workaround with self variable.
    // draw() gets called multiple times with requestAnimationFrame()
    let self = this;
    requestAnimationFrame(() => { self.draw(); });
  }


  // drawImage waits for positional arguments including (img, y, x-coordinates, width and height of img)
  addToCanvas(mapObject) {
    this.ctx.drawImage(mapObject.img, mapObject.x, mapObject.y, mapObject.width, mapObject.height);
  }
}


