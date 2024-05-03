class CollidableObject extends DrawableObject{
  
  constructor(){
   super()
  }


    /**
   * @param {2dContext} ctx The 2d Context of the canvas.
   *  Draws a hitbox rectangle around instances of objects.
   */
    drawFrame(ctx) {
      if (this.offset.right != 0 || this.offset.left != 0 || this.offset.bottom != 0 || this.offset.top != 0  ) {
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
  
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.offset.left, this.y + this.offset.top,
          this.width - (this.offset.left + this.offset.right),
          this.height -(this.offset.top + this.offset.bottom));
        ctx.stroke();
      }
    }
}