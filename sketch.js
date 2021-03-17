const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground1, ground2;
var polygon;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var block17, block18, block19, block20, block21, block22, block23;
var block24, block25, block26, block27, block28;
var block29, block30, block31;
var block32;

var Sling;

var ball;

function preload(){
  polygon=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    // Grounds
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(620,300,270,15);
    ground2 = new Ground(967,200,270,15);

    // Blocks
    block1 = new Block(530,290,30,40);
    block2 = new Block(560,290,30,40);
    block3 = new Block(590,290,30,40);
    block4 = new Block(620,290,30,40);
    block5 = new Block(650,290,30,40);
    block6 = new Block(680,290,30,40);
    block7 = new Block(710,290,30,40);
    
    block8 = new Block(560,220,30,40);
    block9 = new Block(590,220,30,40);
    block10 = new Block(620,220,30,40);
    block11 = new Block(650,220,30,40);
    block12 = new Block(680,220,30,40);

    block13 = new Block(590,180,30,40);
    block14 = new Block(620,180,30,40);
    block15 = new Block(650,180,30,40);

    block16 = new Block(620,150,30,40);

    // Platform 2
    block17 = new Block(877,190,30,40);
    block18 = new Block(907,190,30,40);
    block19 = new Block(937,190,30,40);
    block20 = new Block(967,190,30,40);
    block21 = new Block(997,190,30,40);
    block22 = new Block(1027,190,30,40);
    block23 = new Block(1057,190,30,40);

    block24 = new Block(907,120,30,40);
    block25 = new Block(937,120,30,40);
    block26 = new Block(967,120,30,40);
    block27 = new Block(997,120,30,40);
    block28 = new Block(1027,120,30,40);

    block29 = new Block(937,80,30,40);
    block30 = new Block(967,80,30,40);
    block31 = new Block(997,80,30,40);

    block32 = new Block(967,50 ,30,40);


    // Polygon
   // polygon = new Polygon(50,200,20);

   //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

    // Slingshot
    //Sling = new SlingShot(polygon.body,{x:200,y:200});
    Sling = new SlingShot(this.ball,{x:200,y:200});
}

function draw(){
    background('brown');
    Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
   // polygon.display();
    

    imageMode(CENTER)
    image(polygon,ball.position.x,ball.position.y,40,40);

    Sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    Sling.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        Matter.Body.setPosition(this.ball,{x:200,y:200})
        Sling.attach(ball.body);
    }
}
