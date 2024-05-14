class ThrowableObject extends MovableObject {
  
  
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 80;
    this.throw()
    this.loadImage("./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
  }


  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 2
    }, 1000 / 60);
  }
}
