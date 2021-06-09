var cat1,cat1Img,cat2,cat2Img;
var garden;
var mouse1,mouse1Img,mouse12,mouse2Img;
var bgImg;


function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
   bgImg=loadImage("images/garden.png");
    mouse1Img=loadAnimation("images/mouse1.png");

    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry spritt1Img);

    cat1 = createSprite(800,500);
    cat1.addAnimation("run",cat1Img);
   cat1.scale=0.2;
    

  
   mouse1 = createSprite(500,500);
   mouse1.addAnimation("run",mouse1Img);
  mouse1.scale=0.2;
   
  
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
  if(cat1.x-mouse1.x<(cat1.width/2-mouse1.width/2)){
    keyPressed();
    cat1.addAnimation("so",cat2Img);
    cat1.changeAnimation("so");
    cat1.scale=0.2;
    
  }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  mouse1.x=mouse1.x-5;
  mouse1.addAnimation("ran",mouse2Img);
  mouse1.changeAnimation("ran");
  mouse1.frameDelay=25;
}

if(keyCode===RIGHT_ARROW){
  mouse1.x=mouse1.x+5;
  mouse1.addAnimation("ran",mouse2Img);
  mouse1.changeAnimation("ran");
  mouse1.frameDelay=25;
}

}
