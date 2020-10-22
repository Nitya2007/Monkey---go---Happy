
var monkey , banana ,bananaImage, obstacle, obstacleImage, fruitGroup, obstacleGroup, background1,backgroundImage;
var ground; 
var score=0;


function preload(){
  
  monkey = 
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  backgroundImage=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600,600);
  
 
  background1=createSprite(200,200,600,600);
  background1.addImage(background_Image);
  

  monkey=createSprite(70,500,5,5);
  monkey.addAnimation("monkey",monkey);
  monkey.scale=0.2;
   ground = createSprite(300,570,600,20);
  
  
  background1.velocityX=-4;
  
  score=0;
  
  
  //groups created
  fruitsGroup=new Group();
  obstacleGroup=new Group();
  
  //monkey collision
  monkey.setCollider("rectangle",0,0,500,614);
  monkey.collide(ground);
  
  ground.visible=false;
 
}


function draw() {
  
  
  background("white");
  
  
 
 
  

    if(keyDown("space")&& monkey.y>490)
    {
      monkey.velocityY=-23;
    }
    
    monkey.velocityY=monkey.velocityY+0.8;
   
    
    
    
    if(fruitGroup.isTouching(monkey))
    {
      score=score+2;
      console.log(points);
      fruitGroup.destroyEach();
    
    
  
    switch(score){
      case 10:monkey.scale=0.12;
               break; 
      case 20:monkey.scale=0.14;
               break;          
      case 30:monkey.scale=0.16;
               break;
      case 40:monkey.scale=0.18;
               break;          
       default:break; 
        
    }
    if(obstacleGroup.isTouching(monkey)){
      monkey.scale = 0.2;
    }
    
   stroke = "white";
      textSize(20);
      fill("white");
      text("Score:", score, 500,50);
    spawnObstacles();
    spawnFruits();
      drawSprites();
  } 
  
 

function spawnObstacles()
{
  
  if(frameCount%250==0){
  
  obstacle=createSprite(650,525,20,20);
  obstacle.velocityX=-4;
  
  obstacle.addImage( obstaceImage);
  obstacle.scale=0.2; 
  obstacle.lifetime = 180;
 
  
  
   obstacleGroup.add(obstacle) ;
  }
}

function spawnFruits(){
  
  rand=Math.round(random(300,410));
  
  if(frameCount%180==0)
  {
  
  fruit=createSprite(610,410,20,20);
  fruit.y=rand;
  fruit.velocityX=-4;
  fruit.addImage( bananaImage);
  fruit.scale=0.15; 
  fruit.lifetime = 180;
  fruitsGroup.add(fruit);
  fruit.depth = monkey.depth;
  monkey.depth = monkey.depth + 1

  }
  
}


}