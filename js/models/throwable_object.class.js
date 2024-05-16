class ThrowableObject extends MovableObject {
  
  IMAGES_BOTTLE_ROTATE = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ]

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 80;
    this.throw()
    this.loadImage("./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.fillImgCache(this.IMAGES_BOTTLE_ROTATE);
  }
  
  
  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLE_ROTATE)
    }, 1000 / 13);
    setInterval(() => {
      this.x += 2
    }, 1000 / 60);
  }
}
