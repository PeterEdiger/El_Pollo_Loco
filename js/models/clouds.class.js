class Clouds extends MovableObject{
  x = 0;
  y = 15;
  width = 550; 
  height = 200;

  constructor(){
   super().loadImage("img_pollo_locco/img/5_background/layers/4_clouds/1.png")
   this.animate()
  }

  animate(){
    this.moveLeft(0.2)
  }
}