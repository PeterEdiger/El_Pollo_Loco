

class World {
  cloud = new Clouds();

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addToMap(this.cloud)
    requestAnimationFrame(() => { self.draw(); });
  }

}


class Clouds extends MovableObject{

  constructor(){
   super().loadImage("img_pollo_locco/img/5_background/layers/4_clouds/1.png")
   this.animate()
  }

  animate(){
    setInterval(() => {
      this.x -= 0.2
    }, 1000 / 60);
  }
}








