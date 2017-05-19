var col = [
  "maroon",
  "yellow",
  "red",
  "coral",
  "orange",
	"orangered",
  "darkorange",
  "peru",
  "gold",
  "sienna",
  "indianred",
  "darkgoldenrod"
];

index = 0;

var pos = {
  cx: 100,
  cy: 50,
  rx: 10,
  ry: 20
};

var size = {
  ca: 1,
  cb: 1,
  ra: 1,
  rb: 1
};

function setup() { 
  createCanvas(800,800);
  background(0);
} 

function draw() { 
  // Circle
  pos.cx = random(50,700);
  pos.cy = random(50,700);
  size.ca = random(10,100);
  size.cb = random(10,100);
  
  noStroke();
  fill(col[index]);
  ellipse(pos.cx,pos.cy,size.ca,size.cb);
  
  // Rectangles
  pos.rx = random(50,700);
  pos.ry = random(50,700);
  size.ra = random(50,100);
  size.rb = random(50,100);
	noStroke();
  fill(col[index]);
  rect(pos.rx,pos.ry,size.ra,size.rb);
}

function mousePressed(){
	index = index + 1;
  if(index == col.length){
  	index = 0;
  }
}