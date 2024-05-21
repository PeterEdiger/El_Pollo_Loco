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


  IMAGES_HURT = [
    "./img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./img/4_enemie_boss_chicken/4_hurt/G23.png"
  ];

  IMAGES_DEAD = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]),
      this.fillImgCache(this.IMAGES_WALKING);
    this.fillImgCache(this.IMAGES_HURT);
    this.walkIntervall = null;
    this.hurtIntervall = null;
    this.hurtIndex = 0;
    this.currentAnimation = null;
    this.animate();
  }


  animate() {
    this.walkInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 250);
    this.currentAnimation = 'walk'
  }



  hurtAnimation(images) {
    clearInterval(this.walkIntervall);
    this.currentAnimation = 'hurt';
    
    this.hurtIntervall = setInterval(() => {
      if (this.hurtIndex < images.length) {
        this.img = this.imgCache[images[this.hurtIndex]];
        this.hurtIndex += 1;
      } else {
        this.hurtIndex = 0;
        clearInterval(this.hurtIntervall);
        setTimeout(() => {
          this.resumePreviousAnimation();
        }, 2000); // Optional delay before resuming the previous animation
      }
    }, 250);
  }


  resumePreviousAnimation() {
    if (this.currentAnimation === 'hurt') {
      this.animate(); // Resume the walking animation or whatever the previous animation was
    }

}

}