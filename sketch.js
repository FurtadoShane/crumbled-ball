const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var engine, world;

var box1, box2, box3;
var ground;
var ball;


function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//creating the objects

	box1= new Box(1200,650);
	//box2= new Box();
	//box3= new Box();

	//ground
	ground= new Ground();
	
	//ball
	ball= new Ball(200,450,40);

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ball.display();
 
  box1.display();
  //box2.display();
  //box3.display();

  ground.display();

}

function keyPressed(){

	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
	}

}

