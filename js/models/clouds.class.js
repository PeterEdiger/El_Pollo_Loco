class Clouds extends MovableObject {
  y = 15;
  width = 550;
  height = 200;

  constructor(path, x) {
    super().loadImage(path);
    this.animate();
    this.x = x;
  }

  animate() {
    this.moveLeft(0.5);
  }
}