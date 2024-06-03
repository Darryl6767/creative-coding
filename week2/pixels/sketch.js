let img;
let sampleX =10;
let sampleY =10;

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
        var index =(x*y* img.width)*4;
	      
        var r= img.pixels[index + 0];
	      
         var g= img.pixels[index + 1];
	      
         var b= img.pixels[index + 2];
        
        
        fill(r,g,b);
        
        rect(x,y,sampleX,sampleY);
        
      }
      
      
    }
  
}
