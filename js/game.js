let keyboard = new Keyboard();
let pressedKey = "";
let ctx = canvas.getContext("2d");

let keyCollection = {
  " ": "space",
  "ArrowUp": "up",
  "ArrowDown": "down",
  "ArrowLeft": "left",
  "ArrowRight": "right",
};


function init() {
  ctx;
  canvas = document.getElementById(`canvas`);
  world = new World(canvas, keyboard);
}

pressedKey = window.addEventListener("keydown", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  activatePressedKey(pressedKey);
});



releasedKey = window.addEventListener("keyup", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  deactivatePressedKey(pressedKey);
});


function activatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = true;
  }
}


function deactivatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = false;
  }
}





