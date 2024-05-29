let keyboard = new Keyboard();
let pressedKey = "";
let canvas = document.getElementById(`canvas`);
let ctx = canvas.getContext("2d");
let dialog = document.querySelector(`.dialog-bg`);
let startScreen = document.querySelector(`.start-screen-container`);
let youLostScreen = document.querySelector(`.you-lost-container`);
let audioBtnsHolder = document.querySelector(`.audio-button-holder`);

console.log(ctx);

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
  // initLevel()
  canvas = document.getElementById(`canvas`);
  world = new World(canvas, keyboard);
  startScreen.classList.add("d-none");
  audioBtnsHolder.classList.remove("d-none");
  
}


function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function hideDialogBg() {
  document.querySelector(`.dialog-bg`).classList.add("d-none");
}


function showStartScreen() {
  youLostScreen.classList.add("d-none");
  startScreen.classList.remove(`d-none`)  
}


function showLegalNotice() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = legalNoticeTemplate();
}


function showGameControls() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = gameControlsTemplate();
}


function showPrivacyPolicy() {
  dialog.classList.remove("d-none");
  dialog.innerHTML = "";
  dialog.innerHTML = privacyPolicyTemplate();
}


function showLostScreen() {
  document.querySelector(`.you-lost-container`).classList.remove("d-none");
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





