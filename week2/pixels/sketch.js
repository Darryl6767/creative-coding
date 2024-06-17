//This is a zoomed in pixel portrait Bobby Drake(aka Iceman), my favorite X-Men. I was actually scrolling on the internet and I saw this "guess the character" game/video where you guess who the character is from distorted pixels, so I wanted to try to replicate that in some sort of way.

let img;
let sampleX =45;
let sampleY= 45;

function preload(){
  img= loadImage( 'https://darryl6767.github.io/creative-coding/week2/pixels/iceman.png');
  
}
function setup() {
  createCanvas(700, 700);
  img.loadPixels()
}

function draw() {
  background(220);
  
  translate(200,100);
  
  for(let x=0; x <= img.width; x += sampleX)
    {
      for(let y=0; y<= img.height; y += sampleY){
        var index =(x + y* img.width)*4;
        
        var r= img.pixels[index + 0];
        
         var g= img.pixels[index + 1];
        
         var b= img.pixels[index + 2];

         
        
        
        fill(r,g,b);
        
        rect(x,y,sampleX,sampleY);
        
      }
      
      
    }
  
}
