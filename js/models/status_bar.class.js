class StatusBar extends DrawableObject {

  percentage = 100;

  IMAGES = [
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];


  constructor() {
    super()
    this.x = -100;
    this.y = 20;
    this.width = 100; 
    this.height = 30;
    this.fillImgCache(this.IMAGES);
    this.setPercentage(100);
  }


  resolveImageIndex() {
    if (this.percentage === 100) {
      return 5;
    }
    else if (this.percentage > 80) {
      return 4;
    }
    else if (this.percentage > 60) {
      return 3;
    }
    else if (this.percentage > 40) {
      return 2;
    }
    else if (this.percentage > 20) {
      return 1;
    }
    else {
      return 0;
    }
  }


  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imgCache[path]
  }
}

