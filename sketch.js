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
  database = firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value", readStock);
}


function draw() {  
  background(255,255,254);
  textSize(15);
  stroke("black");
  text("Food Remaining: "+foodS,180,180);   
  text("Press UP_ARROW key to feed the pet milk", 100,20);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}

// to read data value from database
function readStock(data){
  foodS = data.val();
}

// to write for update data value in database
function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
}
