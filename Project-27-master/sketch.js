
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(500,100,900,50);

	bobObject1 = new Bob(300,750,100);
	bobObject2 = new Bob(400,750,100);
	bobObject3 = new Bob(500,750,100);
	bobObject4 = new Bob(600,750,100);
	bobObject5 = new Bob(700,750,100);

	rope1 = new Rope(bobObject1.body, roofObject.body, -200,0);
	rope2 = new Rope(bobObject2.body, roofObject.body, -100,0);
	rope3 = new Rope(bobObject3.body, roofObject.body, 0,0);
	rope4 = new Rope(bobObject4.body, roofObject.body, 100,0);
	rope5 = new Rope(bobObject5.body, roofObject.body, 200,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roofObject.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	
  drawSprites();
 
}

function keypressed()
{
	if(keycode === UP_ARROW)
	{
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x : -150, y : -100});	
	}
}