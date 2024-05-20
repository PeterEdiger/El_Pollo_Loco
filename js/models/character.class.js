// canvas width="720" height="480"


class Character extends MovableObject {
  x = 0;
  y = 244;
  width = 100;
  height = 200;
  world;
  speed = 10;
  walkingSound = new Audio("audio/pepe_running.wav");
  pepeWalkIndex = 0;
  dyingIndex = 0;


  offset = {
    left: 20,
    right: 20,
    top: 70,
    bottom: 15,
  };


  IMAGES_WALKING = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "./img/2_character_pepe/3_jump/J-31.png",
    "./img/2_character_pepe/3_jump/J-32.png",
    "./img/2_character_pepe/3_jump/J-33.png",
    "./img/2_character_pepe/3_jump/J-34.png",
    "./img/2_character_pepe/3_jump/J-35.png",
    "./img/2_character_pepe/3_jump/J-36.png",
    "./img/2_character_pepe/3_jump/J-37.png",
    "./img/2_character_pepe/3_jump/J-38.png",
    "./img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "./img/2_character_pepe/5_dead/D-51.png",
    "./img/2_character_pepe/5_dead/D-52.png",
    "./img/2_character_pepe/5_dead/D-53.png",
    "./img/2_character_pepe/5_dead/D-54.png",
    "./img/2_character_pepe/5_dead/D-55.png",
    "./img/2_character_pepe/5_dead/D-56.png",
    "./img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "./img/2_character_pepe/4_hurt/H-41.png",
    "./img/2_character_pepe/4_hurt/H-42.png",
    "./img/2_character_pepe/4_hurt/H-43.png",
  ];




  constructor() {
    super()
    this.loadImage("./img/2_character_pepe/2_walk/W-21.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.fillImgCache(this.IMAGES_JUMPING);
    this.fillImgCache(this.IMAGES_DEAD);
    this.fillImgCache(this.IMAGES_HURT);
    this.applyGravity();
    this.animate();
  }


  /**
   * Handles the different animations of the character based on a state or move. 
   *  f.E  jump, move, isHurt.
   */
  animate() {
    setInterval(() => {
      this.walkingSound.pause();
      this.changeRunningDirection()
      this.moveStatusBarWithCharacter()
      this.characterJump()
      this.world.camera_x = this.x - 150;
    }, 1000 / 60);

    setInterval(() => this.animateCharacterMovements(), 200);
  }

  /**
   * Changes pngs of the character when movements are triggered. 
   * Simulates the movements of jump, hurt, dead, walk.
   */
  animateCharacterMovements(){
    if (this.isDead()) {
      this.deadAnimation(this.IMAGES_DEAD, this.dyingIndex);
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
    }
    else if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    } else {
      if (this.world.keyboard.right || this.world.keyboard.left) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }    
  }


  /**
   * Changes the running direction of the character based on a pressed key. 
   *
   */
  changeRunningDirection(){
      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.moveRight();
        this.otherDirection = false;
        this.walkingSound.play();
      }
      if (this.world.keyboard.left && this.x > -200) {
        this.moveLeft();
        this.otherDirection = true;
        this.walkingSound.play();
      }
  }

  moveStatusBarWithCharacter(){
    this.world.statusBarHealth.x = this.x -100
    this.world.statusBarCoins.x = this.x -100
    this.world.statusBarBottles.x = this.x -100
    this.world.statusBarEndboss.x = this.x + 400
   }

  characterJump(){
    if (!this.isAboveGround() && this.world.keyboard.up) {
      this.jump();
    }
  
  }
}

