let x = 50;
let y = 0;
let kit;
let kit2;
let dx = 5;
let score = 0;

function setup() {
  createCanvas(800, 400);
  y = random(50, 350);
}

function draw() {}

function preload() {
  // preload() runs once
  kit = loadImage("kit.png");
  kit2 = loadImage("kit2.png");
}

function draw() {
  background("#05B8FC");
  kit.resize(0, 50);
  kit2.resize(0, 50);
  if (x > width - 50 || x < 0) {
    dx = -dx;
  }
  if (dx < 0) {
    image(kit2, x, y);
  } else {
    image(kit, x, y);
  }
  x = x + dx;
}
