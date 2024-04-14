class DrawableObject{
  height;
  width;
  img;
  imgCache = {};
  currentIndex = 0;
  x;
  y;


    /**
   * @param {string} path needed path to create {src for} {img element}
   * Creates an HTML {img element}.
   * Adds a {.src property}  to that {img element} 
   */
    loadImage(path) {
      this.img = new Image();
      this.img.src = path;
    }
 
  /**
   * @param {2dContext} ctx The 2d Context of the canvas.
   *  Draws a hitbox rectangle around instances of objects.
   */
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
    
      /**
   * @param {Array} array contains img paths
   * Fills {ImgCache} with [key:path] ➔ [value: img element].
   */
  fillImgCache(array) {
    array.forEach(path => {
      let image = new Image();
      image.src = path;
      this.imgCache[path] = image;
    });
  }

}