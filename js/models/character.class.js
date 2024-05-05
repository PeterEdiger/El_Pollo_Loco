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
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "img_pollo_locco/img/2_character_pepe/3_jump/J-31.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-32.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-33.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-34.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-35.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-36.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-37.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-38.png",
    "img_pollo_locco/img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "img_pollo_locco/img/2_character_pepe/5_dead/D-51.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-52.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-53.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-54.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-55.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-56.png",
    "img_pollo_locco/img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-41.png",
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-42.png",
    "img_pollo_locco/img/2_character_pepe/4_hurt/H-43.png",
  ];




  constructor() {
    super()
    this.loadImage("img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
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

      // Jumping logic. 
      if (!this.isAboveGround() && this.world.keyboard.up) {
        this.jump();
      }

      // moves the camera according to the change of Pepes x-axis.
      this.world.camera_x = this.x - 150;

      this.world.statusBarHealth.x = this.x -100
      this.world.statusBarCoins.x = this.x -100
      this.world.statusBarBottles.x = this.x -100
    }, 1000 / 60);

    
    // Interval for Pepes movements {walk, jump}
    setInterval(() => {
      if (this.isDead()) {
        this.deadAnimation(this.IMAGES_DEAD);
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
    }, 50);
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
    return
  }
}

