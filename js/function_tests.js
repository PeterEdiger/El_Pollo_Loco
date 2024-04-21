

checkCollisions() {
  setInterval(() => {
    this.level.enemies.forEach(enemy => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }, 200);
}