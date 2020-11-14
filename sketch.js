//Create variables here
var dog, happyDog 
var dogImage;
var database, data;
var foodStock;
var foodS;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  //create sprite for dog and add dogImage
  dog = createSprite(250,250,20,20);
	dog.addImage(dogImage);
  dog.scale = 0.1;
  
  //Assign database to firebase
  //database = firebase.database();
  // foodStock = database.ref("Food")
  // foodStock.on("value", readStock);
}


function draw() {  
  background("lightBlue");

  text("Food Remaining: ",200,200);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }
  // database.ref("/").update({
  //   Food:x
  // })
}
