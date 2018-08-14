float x = 50;
float y;
PImage kit;
PImage kit2;
int dx = 5;
int score;

void setup() {
  size(800, 400);
  kit = loadImage("kit.png");
  kit2 = loadImage("kit2.png");
  y = random(50, 350);
}

void draw() {
  background(#05B8FC);
  kit.resize(0, 50);
  kit2.resize(0, 50);
  if (x > width - 50 || x < 0) {
    dx = - dx;
  }
  if (dx < 0) {
    image(kit2, x, y);
  } else {
    image(kit, x, y);
  }
  x = x + dx;
}