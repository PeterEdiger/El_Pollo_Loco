
animate(){

  // Checks for Pepes running direction 
  setInterval(() => {
    if(this.world.keyboard.right){
      this.x += this.speed
      this.otherDirection = false
    }

    if(this.world.keyboard.left){
      this.x -= this.speed
      this.otherDirection = true
    }
    this.world.camera_x = -this.x
  }, 1000 / 60);








