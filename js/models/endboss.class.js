class Endboss extends MovableObject {

  x = 2200;
  y = 145;
  width = 300;
  height = 300;

  offset = {
    left: 30,
    right: 30,
    top: 50,
    bottom: 10,
  };
  

  IMAGES_WALKING = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png"
  ];


  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]),
    this.fillImgCache(this.IMAGES_WALKING);
    this.animate()
  }

  
  animate(){
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING)
    }, 250);
  }
}