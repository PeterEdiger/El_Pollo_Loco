// canvas width="720" height="480"

class Background extends MovableObject {

  width = 720;
  x = 0;
  y = 0;
  height = 480;
  
  constructor(path, x) {
    super().loadImage(path);
    this.x = x;
  }
}





