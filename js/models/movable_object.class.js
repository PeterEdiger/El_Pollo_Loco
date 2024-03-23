class MovableObject {
  x = 120;
  y = 200;  
  img;
  height = 150;
  width = 100;

  loadImage(path) {
    // Creates an HTML <img ...> element without src. 
    this.img = new Image();
    // Adding image src. 
    this.img.src = path;
  }

  moveRight() {
  }

  moveLeft() {
  }
}