class Bottle extends CollidableObject{

  width = 50; 
  height = 50;
  y = 375;


  offset = {
    left: 20,
    right: 10,
    top: 5,
    bottom: 5,
  };


  constructor(){
   super()
   this.loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png")

  }
}