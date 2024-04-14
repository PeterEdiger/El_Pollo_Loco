class staticObject extends MovableObject {
  y = 400;
  width = 50;
  height = 50;

  
  constructor(objectPath) {
    super().loadImage(objectPath);
    this.objectPath = objectPath;
    this.x = 200 + Math.random() * 1500;
  }
}