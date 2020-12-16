var mR,fR;
function setup() {
  createCanvas(800,400);
  fR = createSprite(400, 200, 50, 50);
  fR.shapeColor = "blue";
  mR = createSprite(350,200,40,40);
  mR.shapeColor = "blue";

}

function draw() {
  background(255,255,255);  

  mR.x = mouseX;
  mR.y = mouseY;

  if(mR.x-fR.x < mR.width/2+fR.width/2 && fR.x-mR.x < mR.width/2+fR.width/2 && mR.y-fR.y < mR.height/2+fR.height/2 && fR.y-mR.y < mR.height/2+fR.height/2){
    mR.shapeColor = "black";
  }
  else{
    mR.shapeColor = "blue";
  }

console.log(mR.x);

  drawSprites();
}