class Level {
  enemies;
  clouds;
  backgrounds;
  levelEndX = 2000

  constructor(enemies, clouds, backgrounds){
   this.enemies = enemies;
   this.clouds = clouds;
   this.backgrounds = backgrounds;
  }
}