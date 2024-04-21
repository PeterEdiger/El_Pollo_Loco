class ThrowableObject extends MovableObject {
  
  
  constructor() {
    super();
    this.x = 100;
    this.y = 100;
    this.width = 60;
    this.height = 80;
    this.throw(100, 150)
    this.loadImage("img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
  }


  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 2
    }, 1000 / 60);
  }

}
