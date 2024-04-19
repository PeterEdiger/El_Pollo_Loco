class ThrowableObject extends MovableObject {
  width = 60;
  height = 80;


  constructor() {
    super();
    this.loadImage("img_pollo_locco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.x = 100;
    this.y = 100;
    this.throw(100, 150)
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    this.applyGravity();
  }

}
