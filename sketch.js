const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;


var ground0;
var building0,building1,building2,building3,building4,building5,building6,building7,building8,building9,building10,building11;

var ball;

var rope0;

function setup(){
createCanvas(1400,500);

engine = Engine.create();
world = engine.world;

ground0 = new Ground(width/2, 480);

building0 = new Building(900, 450, 100, 100);
building1 = new Building(900, 350, 100, 100);
building2 = new Building(900, 250, 100, 100);
building3 = new Building(900, 150, 100, 100);
building4 = new Building(800, 450, 100, 100);
building5 = new Building(1000, 450, 100, 100);
building6 = new Building(1000, 350, 100, 100);
building7 = new Building(1000, 250, 100, 100);
building8 = new Building(1000, 150, 100, 100);
building9 = new Building(1100, 450, 100, 100);
building10 = new Building(800, 350, 100, 100);
building11 = new Building(1100, 350, 100, 100);

ball = new Ball(650, 350, 100);

rope0 = new Rope(ball.body, {x:650, y:20});



}

function draw(){
background(240);

Engine.update(engine);

ground0.display();

building0.display();
building1.display();
building2.display();
building3.display();
building4.display();
building5.display();
building6.display();
building7.display();
building8.display();
building9.display();
building10.display();
building11.display();

ball.display();

rope0.display();

}

function mouseDragged(){
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}