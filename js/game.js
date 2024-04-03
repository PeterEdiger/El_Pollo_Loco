let keyboard = new Keyboard()
let pressedKey = ""


let keyCollection = {
  " ": "space",
  "ArrowUp": "up",
  "ArrowDown": "down",
  "ArrowLeft": "left",
  "ArrowRight": "right",
}


function init() {
  canvas = document.getElementById(`canvas`);
  world = new World(canvas, keyboard);
}


pressedKey = window.addEventListener("keydown", keyboardEvent => {
  pressedKey = keyboardEvent.key
  activatePressedKey(pressedKey)
})



releasedKey = window.addEventListener("keyup", keyboardEvent => {
  console.log("keyup triggering");
  pressedKey = keyboardEvent.key
  deactivatePressedKey(pressedKey)
})


function activatePressedKey(pressedKey){
  if(pressedKey in keyCollection){
    let keyCollectionValue = keyCollection[pressedKey]
    keyboard[keyCollectionValue] = true 
  }
}


function deactivatePressedKey(pressedKey){
  if(pressedKey in keyCollection){
    let keyCollectionValue = keyCollection[pressedKey]
    keyboard[keyCollectionValue] = false 
    console.log(keyCollection);
  }
}





