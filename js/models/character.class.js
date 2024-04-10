// canvas width="720" height="480"


class Character extends MovableObject {
  x = 0;
  y = 100;
  width = 100;
  height = 200;
  world;
  speed = 10;
  

  IMAGES_WALKING = [
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ]


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
  ]

walkingSound = new Audio("audio/pepe_running.wav")

  pepeWalkIndex = 0;

  constructor() {
    super().loadImage("./img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
    this.fillImgCache(this.IMAGES_WALKING);
    this.fillImgCache(this.IMAGES_JUMPING);
    this.applyGravity()
    this.animate()
  }


  animate(){

    // Checks for Pepes running direction 
    setInterval(() => {
      this.walkingSound.pause()
      if(this.world.keyboard.right && this.x < this.world.level.levelEndX){
        this.x += this.speed
        this.otherDirection = false
        this.walkingSound.play()
      }
      
      if(this.world.keyboard.left && this.x > -200){
        this.x -= this.speed
        this.otherDirection = true
        this.walkingSound.play()
      }

      if(!this.isAboveGround() && this.world.keyboard.up){
        this.speedY = 30
      }

      this.world.camera_x = this.x -150
    }, 1000 / 60);

    // Interval for moving Pepes arms and feet.
    setInterval(() => {
      if(this.isAboveGround()){
        this.playAnimation(this.IMAGES_JUMPING)
      } else {
        if(this.world.keyboard.right || this.world.keyboard.left){
          this.playAnimation(this.IMAGES_WALKING)
        }
      }
    }, 50);
  }
}

