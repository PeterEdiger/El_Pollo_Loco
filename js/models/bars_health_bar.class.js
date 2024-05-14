class HealthBar extends DrawableObject {

  percentage = 100;


  IMAGES = [
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "./img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];



  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 30;
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
    this.loadImage(path)
  }
}

