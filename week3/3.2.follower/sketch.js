let debug=true;

let x=0;

let y=0;

let d=0;

let speedfactor =3;

let speedx = speedfactor;

let speedy= speedfactor;

let score = 0;
function setup() {
  createCanvas(800, 800);
  
  x=random(0,width);
  y=random(0,height);
  
}

function draw() {
  background(220);
  
  
  //Function that represents the distance formula
  d = sqrt((x-mouseX)**2 +(y-mouseY)**2);
  
  //If statement for collision
  
  if(d<25){
    score -= 1;
    x=random(0,width);
  y=random(0,height);
  }
  
  //movement
  x += speedx;
  y+= speedy;
  
  //Circle for the follower
  
  circle(x,y,50);
  
  if(mouseX > x){
    //right
    speedx=speedfactor;
  }else{
    //left
     speedx=-speedfactor;
  }
  
    if(mouseY > y){
    //right
    speedy=speedfactor;
  }else{
    //left
     speedy=-speedfactor;
  }
  
  if(debug){
    
  
  textSize(20);
  text("mouse in X direction:" + mouseX, 50,50);
    text("mouse in Y direction:" + mouseY, 50,70);
    text("x:" + x,50,120);
     text("y:" + y,50,140);
       text("d:" + d,50,160);
     text("score:" + score,50,180);
    
    }
}
