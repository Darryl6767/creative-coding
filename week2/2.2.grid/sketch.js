function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);
  
  //take the grid and place it out of the corner
  translate(180,100);
  
  
  //for loop
    for(let x = 0; x < 8; x += 1) {
    for(let y = 0; y < 8;  y += 1){
      push();
      
      
      translate(x * 120, y * 120);
      
      
      //make the circles
      ellipse(0,0,100);
      
      pop();
      
      stroke("black");
      
      strokeWeight(23);
      
      //generate random color
      fill(100,random(0,50 ),20);
      
    }
  }
}
