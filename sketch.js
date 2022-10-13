var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle, obs1img, obs2img, obs3img, obs4img, obs5img, obs6img;
var cloud, cloudsGroup, cloudImage;
var rand
var score=0
// Time = Distance ÷ Speed.

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obs1img =loadImage("obstacle1.png")
  obs2img = loadImage("obstacle2.png")
  obs3img = loadImage("obstacle3.png")
  obs4img = loadImage("obstacle4.png")
  obs5img = loadImage("obstacle5.png")
  obs6img = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  fill("black")
  text("your score is:" + score, 500,50)
  score = Math.round((score+frameCount)/200)
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
spawn_obstacles();  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 220
    
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawn_obstacles(){
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4
    rand = Math.round(random(1,6))

    switch(rand){
      case 1: obstacle.addImage(obs1img)
      break
      
      case 2: obstacle.addImage(obs2img)
      break

      case 3: obstacle.addImage(obs3img)
      break

      case 4: obstacle.addImage(obs4img)
      break

      case 5: obstacle.addImage(obs5img)
      break

      case 6: obstacle.addImage(obs6img)
      break
    }
    obstacle.scale = 0.5
    obstacle.lifetime = 220
  }
    
}
