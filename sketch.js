var iss;
var spacecraft;
var hasDocked = false;
var issImage;
var spacebgImage;
var spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image;

function preload(){
  issImage = loadImage("iss.png");
  spacebgImage = loadImage("spacebg.png");
  spacecraf1Image = loadImage("spacecraft1.png");
  spacecraft2Image = loadImage("spacecraft2.png");
  spacecraft3Image = loadImage("spacecraft3.png");
  spacecraft4Image = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  iss = createSprite(400, 200);
  iss.addImage("iss",issImage);
  iss.scale = 1;

  spacecraft = createSprite();
  spacecraft.addImage("spacecraft1",spacecraft1Image);
  spacecraft.scale = 1;

}

function draw() {
  background(spacebgImage);  

  if(!hasDocked){
    spacecraft.x = rand(200,600);

    if(KeyDown("UP_ARROW")){
      spacecraft.y--;
    }

    if(KeyDown("DOWN_ARROW")){
      spacecraft.addImage("spacecraft2",spacecraft2Image);
    }

    if(KeyDown("LEFT_ARROW")){
      spacecraft.x--;
      spacecraft.addImage("spacecraft3",spacecraft3Image);
    }

    if(KeyDown("RIGHT_ARROW")){
      spacecraft.x++;
      spacecraft.addImage("spacecraft4",spacecraft4Image);
    }
  }

  drawSprites();
}