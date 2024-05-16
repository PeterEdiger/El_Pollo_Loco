
checkThrowObjects() {
  // was ist bottleImgIndex und wie könnte man es umbenennen?
  // bottleImgIndexx zeigt auf das Bild von der bottle StatusBar. 
  if (this.keyboard.d && this.bottleImgIndex >= 0) {
    let bottleBarImages = this.statusBarBottles.IMAGES;
    console.log(this.bottleImgIndex);
    let bottle = new ThrowableObject(this.character.x, this.character.y);
    this.throwableObjects.push(bottle);
    this.statusBarBottles.loadImage(bottleBarImages[this.bottleImgIndex])
    this.bottleImgIndex -= 1
}
}