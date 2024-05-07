setInterval(animateCharacterMovements, 200);


animateCharacterMovements(){
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

}
