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

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }


  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backgrounds.forEach(background => {
      this.addToMap(background);
    });
    this.addToMap(this.character);
    this.enemies.forEach(enemy => {
      this.addToMap(enemy);
    });
    this.addToMap(this.cloud)
    // requestAnimationFrame cant handle this keyword. Thats why the workaround with self variable.
    // draw() gets called multiple times with requestAnimationFrame()
    let self = this;
    requestAnimationFrame(() => { self.draw(); });
  }


  // drawImage waits for positional arguments including (img, y, x-coordinates, width and height of img)
  addToMap(mapObject) {
    this.ctx.drawImage(mapObject.img, mapObject.x, mapObject.y, mapObject.width, mapObject.height);
  }
}


