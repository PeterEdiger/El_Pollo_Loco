class BottlesBar extends DrawableObject{

  IMAGES = [
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png"
  ];



  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
    this.loadImage(this.IMAGES[0])
  }
}