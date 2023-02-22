//Setup Function
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}
//Draw Function
function draw() {
  background(100, 150, 100);
  
//If-else conditional, draw sprites if mouse held
  if(mouseIsPressed){
    draw2(40, 40, 1.7, "darkgreen", "pink")
  }
  else{
    draw1(50, 50, 1.5, "blue")
  }
}

//Draw human
function draw1(x, y, size, col){
  push()
  translate(x, y)
  scale(size)
  fill(col)
  //Head
  ellipse(100, 100, 150)
  fill("white")
  ellipse(70, 100, 50)
  ellipse(130, 100, 50)
  fill("black")
  ellipse(70, 100, 30)
  ellipse(130, 100, 30)
  
  //moustache
  arc(100, 150, 50, 50, 180, 0)
  
  pop()
}

//Draw Wolf?...Demon?
function draw2(x, y, size, col, earcol){
  push()
  translate(x, y)
  scale(size)
  
  //headstuffs
  fill(col)
  ellipse(100, 100, 150)
  fill("lightpink")
  triangle(85, 115, 50, 100, 50, 60)
  triangle(115, 115, 150, 100, 150, 60)
  
  //Ears
  fill(earcol)
  triangle(10, 10, 40, 60, 70, 30)
  triangle(190, 10, 160, 60, 130, 30)
  
  strokeWeight(2)
  fill("red")
  ellipse(70, 100, 10)
  ellipse(130, 100, 10)
  
  //smile
  fill("darkred")
  arc(100, 140, 50, 50, 0, 180)
  fill("red")
  arc(100, 150, 20, 20, 180, 0)
  
  pop()
}
