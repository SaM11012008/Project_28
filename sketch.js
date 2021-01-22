
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mangoGroup;
var world,boy,stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1050,150,30);
	mango4=new mango(970,100,30);
	mango5=new mango(1200,230,30);
	mango6=new mango(1184,123,27);
	mango7=new mango(900,220,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone=new Stone(240,500,20);

	slingshot = new slingshot(stone.body,{x:240,y:450});
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);

  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  groundObject.display();
  slingshot.display();
  stone.display();

  fill("black");
  textSize(20);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!!!!!",100,100);

  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango7,stone);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	slingshot.fly()
}

function detectCollision(mango,stone){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:240,y:500});

    slingshot.attach(stone.body);
  }
}