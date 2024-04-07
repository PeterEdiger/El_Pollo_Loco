

animate(){
  
  // Interval for moving Pepes arms and feet.
  setInterval(() => {
    if(this.world.keyboard.right || this.world.keyboard.left){
      let i = this.pepeWalkIndex % this.IMAGES_WALKING.length 
      this.pepeWalkIndex = i
      this.img = this.imgCache[this.IMAGES_WALKING[this.pepeWalkIndex]]
      this.pepeWalkIndex += 1
    }
  }, 40);
}
