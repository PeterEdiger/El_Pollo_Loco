class Clouds extends MovableObject {
 
  constructor(path, x) {
    super().loadImage(path);
    this.animate();
    this.x = x;
  }

  y = 15;
  width = 550;
  height = 200;

  
  animate() {
    this.moveLeft(0.5);
  }
}