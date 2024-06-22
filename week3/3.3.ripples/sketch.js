let ripple_x = 0;

let ripple_y = 0;

let ripple_d = 50;

let ripplers = [];

class Rippler {
 constructor (x,y){
  this.x = x;
   
  this.y = y;
   
  this.d = 0;

 }
 
 draw(){
  this.d += 1;
   
  circle(this.x, this.y, this.d);
 } 

}

function setup() {
  
  createCanvas(800, 800);
}

function draw() {
  
  background(222, 244, 252);
  
  stroke("##2eeee1")
  
  strokeWeight(3);
  
  noFill();

  for (let i = 0; i < ripplers.length; i++){
  
  ripplers[i].draw();

  }

  //ripple_d += 1;
  
  //circle(ripple_x, ripple_y, ripple_d);
 
  //push();
  
  //fill("white");
  
  //strokeWeight(1);
  
  //textSize(50);
  
  //text("ripple_x " + ripple_x, 50, 50);
  
  //text("ripple_y " + ripple_y, 50, 100);
  
  //pop();
}

function mousePressed(){

  ripple_x = mouseX;
  
  ripple_y = mouseY;
  
  ripple_d = 0;



  ripplers.push(new Rippler(mouseX, mouseY));
}
