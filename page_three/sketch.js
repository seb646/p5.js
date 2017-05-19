var nums = [];

function setup() { 
  createCanvas(500, 300);
} 

function draw() { 
  frameRate(15);
  background(0);
  for(var i = 0; i < 100; i++){
    nums[i] = random(100,600);
    stroke(255);
    noFill();
  	ellipse(i * 10, 400, 0, nums[i]);
  }
}