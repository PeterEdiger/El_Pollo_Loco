class Endboss extends MovableObject {

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]),
      this.fillImgCache(this.IMAGES_WALKING);
    this.fillImgCache(this.IMAGES_HURT);
    this.fillImgCache(this.IMAGES_ALERT);
    this.animate();
    this.speed = 0;
  }


  x = 2200;
  y = 145;
  width = 300;
  height = 300;

  hurtIndex = 0;
  walkInteval;
  hurtInterval;
  currentAnimation = null;
  endbossWalking = false;
  hurtAnimationIndex = 0;
  walkingInterval;

  offset = {
    left: 30,
    right: 30,
    top: 50,
    bottom: 10,
  };

  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];


  IMAGES_HURT = [
    "./img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./img/4_enemie_boss_chicken/4_hurt/G23.png"
  ];


  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];


  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];


  IMAGES_DEAD = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png",
  ];


  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    this.walkInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_ALERT);
    }, 250);
    this.currentAnimation = 'walk';
  }



  hurtAnimation(images) {
    this.hurtInterval = setInterval(() => {
      if (this.hurtAnimationIndex < images.length) {
        clearInterval(this.walkingInterval);
        this.playAnimation(images);
        console.log("coming in here");
        this.hurtAnimationIndex++;
        console.log(this.hurtAnimationIndex);
      }
    }, 500);
    setTimeout(() => {
      clearInterval(this.hurtInterval);
      this.walkInterval = setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
      }, 500);
    }, 1000);

  }


  resumePreviousAnimation() {
    if (this.currentAnimation === 'hurt') {
      this.animate(); // Resume the walking animation or whatever the previous animation was
    }

  }

}