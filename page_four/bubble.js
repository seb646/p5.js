function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 24;
  this.col = color(255);
  this.shape = true;
 
  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }
 
  this.display = function() {
    stroke(255);
    fill(this.col);
    if(this.shape==true){
     ellipse(this.x, this.y, this.r * 2, this.r * 2);
    } else{
      rect(this.x, this.y, this.r*2, this.r*2);
    }
  }
 
  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
 
  this.update = function() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
 
  this.setToSquare = function() {
    this.shape = false;
  }
}