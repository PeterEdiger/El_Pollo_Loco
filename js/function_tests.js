
// Es gibt eine Geschwindigkeit und eine Beschleunigung. 
// Die Beschleunigung erhöht die Geschwindigkeit. 
speedY = 0;
acceleration = 1;


applyGravity() {
    setInterval(() => {
      // Wenn Pepes über dem Boden ist 
      // Oder wenn die Y geschwindigkeit größer 0 ist
      if(this.isAboveGround() || this.speedY > 0){
        // veringere  Pepes y-Achse um speed. 
        this.speedY -= this.acceleration;
        this.y -= this.speedY;
      }
    }, 1000 / 25)
  }
