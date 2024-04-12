  playAnimation(images) {
  let i = this.currentIndex % images.length;
  this.currentIndex = i;
  this.img = this.imgCache[images[this.currentIndex]];
  this.currentIndex += 1;
}

function deadAnimation(images){
  this.img = this.imgCache[images[this.currentIndex]]
  this.currentIndex +=1
}