class World {
  character = new Character();
  enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken()
  ];

  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    // drawImage waits for positional arguments including (img, y, x-coordinates, width and height of img)
    this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    
    let self = this // requestAnimationFrame cant handle this keyword. Thats why the workaround with self variable.
    
    requestAnimationFrame(() => {self.draw()});
  }

  drawChicken() {
    let chickenX = 200;
    for (let i = 0; i < this.enemies.length; i++) {
      let chicken = this.enemies[i];
      chicken.id = `chicken${i}`;
      chicken.width = 50;
      chicken.height = 50;
      chicken.y = 300;
      chickenX += 100;
      chicken.x = chickenX;
      this.ctx.drawImage(chicken.img, chicken.x, chicken.y, chicken.width, chicken.height);
    }
  }
}
