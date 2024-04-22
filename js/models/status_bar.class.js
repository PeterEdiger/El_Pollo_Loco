class StatusBar extends DrawableObject {

  percentage = 100;

  IMAGES = {
    statusBarHealth: [
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
    ],
    statusBarCoins: [
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
    ],
    statusBarBottles: [
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
      "img_pollo_locco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
    ]
  };

  constructor(x, y, imagesKey) {
    super();
    this.x = x
    this.y = y
    this.imagesKey = imagesKey
    this.width = 100;
    this.height = 30;
    console.log(this.imgCache);
    this.fillImgCache(this.IMAGES[this.imagesKey]);
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
    let path = this.IMAGES[this.imagesKey][this.resolveImageIndex()];
    //!
    console.log(path);
    //!
    this.img = this.imgCache[path];
  }
}

