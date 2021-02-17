const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup(){
  createCanvas(displayWidth, displayHeight - 110);
  engine = Engine.create();
  world = engine.world

  level1 = new Level(displayWidth - 1100, displayHeight - 750, displayWidth/1.1, 20);
  floor1 = new Level(displayWidth - 1, displayHeight - 750, displayWidth/2.5, 20);

  level2 = new Level(displayWidth - 300, displayHeight - 625, displayWidth/1.1, 20);
  floor2 = new Level(displayWidth - 1400, displayHeight - 625, displayWidth/2.5, 20);
  
  level3 = new Level(displayWidth - 1100, displayHeight - 500, displayWidth/1.1, 20);
  floor3 = new Level(displayWidth - 1, displayHeight - 500, displayWidth/2.5, 20);

  level4 = new Level(displayWidth - 300, displayHeight - 375, displayWidth/1.1, 20);
  floor4 = new Level(displayWidth - 1400, displayHeight - 375, displayWidth/2.5, 20);
  
  level5 = new Level(displayWidth - 720, displayHeight - 250, displayWidth/1.0001, 20);

  ninja = new Player(displayWidth - 1350, displayHeight - 775, 20);
  
}

function draw(){
  background("Black");  
  Engine.update(engine);
  
  level1.display();
  floor1.display();

  level2.display();
  floor2.display();

  level3.display();
  floor3.display();

  level4.display();
  floor4.display();

  level5.display();

  ninja.display();

  if(keyDown(RIGHT_ARROW)){
    ninja.bodies.position.x = ninja.bodies.position.x + 1;
  }

  if(keyDown(LEFT_ARROW)){
    ninja.bodies.position.x = ninja.bodies.position.x - 1;
  }

  
  
}