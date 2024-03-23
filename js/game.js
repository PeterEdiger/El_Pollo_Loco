let canvas;
let ctx;
let world;



function init() {
  canvas = document.getElementById(`canvas`);
  ctx = canvas.getContext("2d");
  world = new World(canvas);
  world.draw()  
}

// 2 Aufgaben Hünchen soll dargestellt werden
// Character soll am Anfang gliech geladen werden.