var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers,distance=0;
var database;

var form, player, game;

var car1,car2,car3,car4,cars;

var carImage1,carImage2,carImage3,carImage4,track,ground;

function preload(){

carImage1=loadImage("images/car1.png");
carImage2=loadImage("images/car2.png");
carImage3=loadImage("images/car3.png");
carImage4=loadImage("images/car4.png");
track=loadImage("images/track.jpg");
ground=loadImage("images/background.jpg")
}







function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(playerCount===4){
game.update(1)
}  
if(gameState===1){
clear();
game.play();
}
if(gameState===2){
game.end();

}





}
