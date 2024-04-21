let keyboard = new Keyboard();
let pressedKey = "";
let ctx = canvas.getContext("2d");

let keyCollection = {
  " ": "space",
  "ArrowUp": "up",
  "ArrowDown": "down",
  "ArrowLeft": "left",
  "ArrowRight": "right",
  "d": "d"
};


/**
 * Initializer of the game. Starts {body onload="init()"}
 * Initiates the world
 */
function init() {
  canvas = document.getElementById(`canvas`);
  world = new World(canvas, keyboard);
}


/**
 * Event Listener for {keydown} event.
 * Waits till a key is pressed down. 
 * Calls the activatePressedKey function.
 */
pressedKey = window.addEventListener("keydown", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  activatePressedKey(pressedKey);
});


/**
 * Event Listener for {keyup} event. 
 * Listens to a key being released.
 * Calls the activatePressedKey function.
 */
releasedKey = window.addEventListener("keyup", keyboardEvent => {
  pressedKey = keyboardEvent.key;
  deactivatePressedKey(pressedKey);
});


/**
 * @param {string} pressedKey Key that was pressed.
 * Checks if the pressed key is in {keyCollection}
 * Switches variable to true when key is found. 
 */
function activatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = true;
  }
}


/**
 * @param {string} pressedKey Key that was released.
 * Checks if the pressed key is in {keyCollection}
 * Switches variable to true when key is found. 
 */
function deactivatePressedKey(pressedKey) {
  if (pressedKey in keyCollection) {
    let keyCollectionValue = keyCollection[pressedKey];
    keyboard[keyCollectionValue] = false;
  }
}





