class Level {
  enemies;
  clouds;
  backgrounds;
  coins;
  levelEndX = 2000

  constructor(enemies, clouds, backgrounds, staticObjects){
   this.enemies = enemies;
   this.clouds = clouds;
   this.backgrounds = backgrounds;
   this.staticObjects = staticObjects;
  }
}