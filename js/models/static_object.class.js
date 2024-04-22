class staticObject extends MovableObject {
  // y = 375;
  // width = 60;
  // height = 60;

  constructor(objectPath, width, height, y) {
    super().loadImage(objectPath);
    this.objectPath = objectPath;
    this.width = width;
    this.height = height;
    this.y = y
    this.x = 200 + Math.random() * 1500;
  }
}