var fixedrectangle;
var movingrectangle;
var rectangle1, rectangle2,rectangle3,rectangle4;


function setup() {

  createCanvas(800,400);

  fixedrectangle = createSprite(200,200,50,80);
  fixedrectangle.shapeColor="pink";


  movingrectangle = createSprite(400,200,80,30);
  movingrectangle.shapeColor="pink";
  
  rectangle1 = createSprite(100,100,50,50);
  rectangle1.shapeColor="pink";
  
  rectangle2 = createSprite(200,100,50,50);
  rectangle2.shapeColor="pink";
  
  rectangle3 = createSprite(300,100,50,50);
  rectangle3.shapeColor="pink";

  rectangle4 = createSprite(400,100,50,50);
  rectangle4.shapeColor="pink";


}

function draw() {
  background("lightblue");  


  movingrectangle.y=mouseY;
  movingrectangle.x=mouseX;
  if(isTouching(movingrectangle,rectangle2)){
  movingrectangle.shapeColor="green";
  rectangle2.shapeColor="green";
  }

  else{ movingrectangle.shapeColor="pink";
        rectangle2.shapeColor="pink";
    }
  

  

 
 drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.width/2+object1.width/2&&
    object2.y-object1.y<object2.width/2+object1.width/2) {
    return true;

}
else {
  return false;
}
}