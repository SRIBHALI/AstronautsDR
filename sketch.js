 var iss,bg,edges;
 var sleepImg,astronaut,brushImg,brush,gymAni,eatingAni;
 var bathAni,moveAni;
  
    function preload(){

    bg = loadImage("iss.png");
    sleepImg = loadImage("sleep.png");
    brushImg = loadAnimation("brush.png");
    gymAni = loadAnimation("gym1.png","gym2.png");
    eatingAni = loadAnimation("eat1.png","eat2.png");
    bathAni = loadAnimation("bath1.png","bath2.png");
    moveAni = loadAnimation("move.png","move1.png");
    }
    
    
    
    function setup() {
      createCanvas(900, 450);

      iss = createSprite(400,200);
      iss.addImage(bg);
      iss.scale = 0.2;

      astronaut = createSprite(420,230);
      astronaut.addImage(sleepImg);
      astronaut.scale = 0.1;


    }

    function draw() {
      background(220);

      edges = createEdgeSprites();
      astronaut.bounceOff(edges)

      if(keyDown(UP_ARROW)){
        astronaut.addAnimation( "brush",brushImg);
        astronaut.changeAnimation("brush");
        astronaut.y = 300;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
      }

      if(keyDown(DOWN_ARROW)){
        astronaut.addAnimation("gymming",gymAni);
        astronaut.changeAnimation("gymming");
        astronaut.y = 300;
        astronaut.x = 450;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
      }

      if(keyDown(LEFT_ARROW)){
        astronaut.addAnimation("eat",eatingAni);
        astronaut.changeAnimation("eat");
        astronaut.velocityY = 2;
        astronaut.velocityX = 2;
      }

      if(keyDown(RIGHT_ARROW)){
         astronaut.addAnimation("bath",bathAni);
         astronaut.changeAnimation("bath");
         astronaut.velocityX = 0;
         astronaut.velocityY = 0;
         astronaut.y = 300
      }

      if(key_down("m")){
       astronaut.addAnimation("run",moveAni);
       astronaut.changeAnimation("run");
       astronaut.scale = 0.1;
      // astronaut.velocityY = 0;
      // astronaut.velocityX = 0;
      }


      drawSprites();
      textSize(15);
      fill("white");
      text("Instructions:",10,15);
      
      textSize(15);
      fill("white");
      text("Up Arrow = Brushing,",10,35);

      textSize(15);
      fill("white");
      text("Down Arrow = Gymming,",10,55);

      textSize(15);
      fill("white");
      text("Left Arrow = Eating,",10,75);

      textSize(15);
      fill("white");
      text("Right Arrow = Bathing,",10,95);

      textSize(15);
      fill("white");
      text("m key = Moving.",175,35);

    }