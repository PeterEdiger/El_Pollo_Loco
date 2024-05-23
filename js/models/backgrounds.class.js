// canvas width="720" height="480"

class Background extends MovableObject {

  constructor(path, x) {
    super().loadImage(path);
    this.x = x;
  }

  width = 720;
  x = 0;
  y = 0;
  height = 480;
  
}





