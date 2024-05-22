


beginIdle

characterIdle() {

  // character Idle wird die gesamte Zeit ausgeführt
  // ich kann mir die ganze Zeit Zeitstempel holen. 
  let keyboard = this.world.keyboard;
  let keys = Object.keys(keyboard);
  if(!idle){
    beginIdle = new Date().getTime()
  }
  if (keys.every(key => keyboard[key] === false)) {
    idle = true
    if((new Date().getTime() - beginIdle) > (15000)){
      playAnimation(idle)
    }else{
      playAnimation(sleep)
    }
    

  }
}