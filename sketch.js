var monkey,monkeyg,monkeyimg;
var scene,sceneimg;
var stone,stoneg,stoneimg;
var food,foodg,foodimg;
var ground;
var PLAY,END,Gamestate;
var count ;

function preload(){

  stoneimg = loadImage("stone.png");
  
  monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  foodimg   = loadImage("banana.png");
  
  sceneimg  = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600, 500);

  count = 0;
  count = count + 1;
  
  PLAY      = 1;
  END       = 0;
  Gamestate = PLAY;
  
  scene = createSprite(400,200,800,400);
  scene.addImage("scene",sceneimg);
  
  ground = createSprite(200,380,800,0.5);
  
  monkey = createSprite(50,380,30,29);
  monkey.addAnimation("live",monkeyimg);
  monkey.scale =0.2
  
  foodg   = new Group();
  
  stoneg  = new Group();
  
  monkeyg = new Group();

  monkeyg.add(monkey);
}

function draw() {
  background(220);

  if(Gamestate === PLAY){
    if (frameCount%300 === 0){
        obs();
    }
    
    if (frameCount%80 === 0){
        foods();
    }
    
    if(monkey.isTouching(foodg)){
       count + 9 ;
     }
  
    if(monkey.isTouching(stoneg)){
     Gamestate = END ;
     }
    
  }

    
     
  
  if(Gamestate === END ){
     monkey.destroy();
    stoneg.destroyEach();
    foodg.destroyEach();
     
     } 
  
  if(scene.x <= 0){
   scene.x = scene.width/2 ;
  }
  
  if(ground.x <= 0){
   ground.x = ground.width/2; 
  }
    
  monkey.collide(ground);
  drawSprites();
  textSize(20);
  text("survival time:" + count ,200,10);
}

function obs(){
 stone = createSprite(400,400,29,39); 
 stone.velocityX = -3;
 stone.addImage("killer",stoneimg);
  stone.scale = 0.1;
 stoneg.add(stone);
}

function foods(){
 food = createSprite(400,random(120,200),29,39); 
 food.velocityX = -3;
 food.addImage("helper",foodimg);
 food.scale =0.1;
  foodg.add(food);
}