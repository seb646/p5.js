var x = 0; 
var y = 0;  

function setup() { 
  createCanvas(500, 500);
} 
function draw() { 
  rotate(PI/mouseX);
  stroke(200, mouseX, mouseY);
  triangle(mouseX, mouseY, 0, 0);
  triangle(mouseX, mouseY, 500, 500);
  
  x = x + 40;
  y = y + 30; 
  
  if (x > 500){
    x = 0;
  }
  
  if (y > 500){
    y = 0;
  }
}