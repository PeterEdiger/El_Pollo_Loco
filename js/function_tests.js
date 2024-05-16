
checkThrowObjects() {
  // was ist bottlesAvailableIndex und wie könnte man es umbenennen?
  // bottlesAvailableIndexx zeigt auf das Bild von der bottle StatusBar. 
  if (this.keyboard.d && this.bottlesAvailableIndex >= 0) {
    // Die Bilder von der Instanz
    let bottleBarImages = this.statusBarBottles.IMAGES;
    console.log(this.bottlesAvailableIndex);
    // Beim instanziieren wird direkt throw() ausgeführt
    let bottle = new ThrowableObject(this.character.x, this.character.y);
    this.throwableObjects.push(bottle);
    this.statusBarBottles.loadImage(bottleBarImages[this.bottlesAvailableIndex])
    this.bottlesAvailableIndex -= 1
}
}


  /**
   * 
   * @param {array} images that will animate moves of an object.
   * Repeats changing images of an object.
   */
  playAnimation(images) {
    let i = this.currentIndex % images.length;
    this.currentIndex = i;
    this.img = this.imgCache[images[this.currentIndex]];
    this.currentIndex += 1;
  }
