//Setup Function
function setup() {
  createCanvas(400, 400);
}
//Draw Function
function draw() {
  background(220);
  //call 3 draw shape functions
  F_triangle(270,30, 50)
  F_ellipse(200, 200, 70)
  F_pentagon(50, 50, 1.3)
  
}
//Triangle Function
function F_triangle(x, y, size){
  triangle(x, y, x+size, y+size, x-size, y+size)
}
//Ellipse Function
function F_ellipse(x, y, size){
  ellipse(x, y, size)
//Pentagon Function
}
function F_pentagon(x, y, size){
  push()
  translate(x, y)
  scale(size)
  beginShape()
  vertex(20, 20)
  vertex(60, 20)
  vertex(80, 50)
  vertex(60, 80)
  vertex(20, 80)
  vertex(0, 50)
  vertex(20, 20)
  endShape()
  pop()
}
