var bubbles = [];
 
function setup() {
  createCanvas(600, 400);
  frameRate(30);
  for (var i = 0; i < 20; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}
 
function draw() {
  background(0);
 
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
 
    for (var j = i+1; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        bubbles[j].setToSquare();
        bubbles.splice(i,1);
      }
    }
  }
}