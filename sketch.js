var sword, swordImage, alien, enemyImage, fruit1, fruit2,
    fruit3, fruit4, fruits, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage
var PLAY=1
var END=0
var gameState=PLAY



function preload(){
  swordImage= loadImage("sword.png")
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  gameOverImage=loadImage("gameover.png")
 
}

function setup(){
  createCanvas(600, 600);
  
  sword=createSprite(200,200,100,100)
  sword.addImage(swordImage)
  sword.scale=0.5
  
  
  
  alien= new Group()
  fruits= new Group()
  
  score=0
  
}

function draw(){
background("skyblue")
  
  

 if (gameState===PLAY) {
sword.x=World.mouseX
sword.y=World.mouseY
  
  var select_fruit = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_fruit == 1) {
      fruit1()
    } else if (select_fruit == 2) {
      enemy()
    } else if (select_fruit == 3) {
      fruit2()
    } else if (select_fruit == 4){
      fruit3()
   } else {
      fruit4()
    }
     }
 
   if(sword.isTouching(fruits)){
     fruits.destroyEach()
     score=score+1
    }
   
   else
     
   if(sword.isTouching(alien)){
     alien.destroyEach()
    gameState=END;
     fruits.destroyEach()
     alien.setVelocityXEach(0)
     fruits.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     sword.scale=2
     sword.x=300
     sword.y=200
     
     
     }
   }
  
  
  
  
  
 
  
  drawSprites();
  
 text("Score: "+ score, 500,50);
  
}

function enemy(){

 var enemy=createSprite(600,Math.round(random(30,400)),10,10)
  
 enemy.addAnimation("enemy_blinking",enemyImage)
  enemy.velocityX=-6
  enemy.scale=0.75
  enemy.lifetime=150
  alien.add(enemy)
  
}

function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
    fruit1.addImage(fruit1Image)
  fruit1.velocityX=-6
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruits.add(fruit1)
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
    fruit2.addImage(fruit2Image)
  fruit2.velocityX=-6
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruits.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
    fruit3.addImage(fruit3Image)
  fruit3.velocityX=-6
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruits.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
    fruit4.addImage(fruit4Image)
  fruit4.velocityX=-6
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruits.add(fruit4)
  }
