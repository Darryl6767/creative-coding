function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //body of the emoji
  background(220);
  
  fill("gold");

 stroke("black")
  strokeWeight(10)
  
  circle(200,200,250);
  
  
  //eyes 
  
  
  fill("white")
  stroke("white")
  strokeWeight("20")
  ellipse(150,180,45,45)
  
   fill("white")
  stroke("white")
  strokeWeight("20")
  ellipse(250,180,45,45)
  
  fill("black")
  stroke("black") 
  ellipse(150,160,1,10)
  
  
   
  fill("black")
  stroke("black") 
  ellipse(250,160,1,10)
  
  
  //mouth
  
  stroke("black")
  strokeWeight("10")
  line(220,300,180,300)
}
