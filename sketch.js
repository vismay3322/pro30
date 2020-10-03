
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon1;
var ground,ground1,ground2;
var BLOCK1,BLOCK2,BLOCK3,BLOCK4,BLOCK5,BLOCK6,BLOCK7,BLOCK8;
var BLOCK9,BLOCK10,BLOCK11,BLOCK12,BLOCK13,BLOCK14;
var BLOCK15,BLOCK16,BLOCK17,BLOCK18;
var BLOCK19,BLOCK20;
var BLOCK21;
var BLOCK22,BLOCK23,BLOCK24,BLOCK25,BLOCK26,BLOCK27,BLOCK28,BLOCK29;
var BLOCK31,BLOCK32,BLOCK33,BLOCK34,BLOCK35,BLOCK36;
var BLOCK37,BLOCK38,BLOCK39,BLOCK40;
var BLOCK41,BLOCK42;
var BLOCK43;
var Slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,1000,20);
	ground1 = new Ground(295,600,240,20);
	ground2 = new Ground(590,450,240,20);

	BLOCK1 = new Block(190,575,30,30);
	BLOCK2 = new Block(220,575,30,30);
	BLOCK3 = new Block(250,575,30,30);
	BLOCK4 = new Block(280,575,30,30);
	BLOCK5 = new Block(310,575,30,30);
	BLOCK6 = new Block(340,575,30,30);
	BLOCK7 = new Block(370,575,30,30);
	BLOCK8 = new Block(400,575,30,30);

	BLOCK9 = new Block1(220,545,30,30);
	BLOCK10 = new Block1(250,545,30,30);
	BLOCK11 = new Block1(280,545,30,30);
	BLOCK12 = new Block1(310,545,30,30);
	BLOCK13 = new Block1(340,545,30,30);
	BLOCK14 = new Block1(370,545,30,30);

	BLOCK15 = new Block2(250,515,30,30);
	BLOCK16 = new Block2(280,515,30,30);
	BLOCK17 = new Block2(310,515,30,30);
	BLOCK18 = new Block2(340,515,30,30);

	BLOCK19 = new Block3(280,485,30,30);
	BLOCK20 = new Block3(310,485,30,30);

	BLOCK21 = new Block4(295,455,30,30);

	BLOCK22 = new Block(485,425,30,30);
	BLOCK23 = new Block(515,425,30,30);
	BLOCK24 = new Block(545,425,30,30);
	BLOCK25 = new Block(575,425,30,30);
	BLOCK26 = new Block(605,425,30,30);
	BLOCK27 = new Block(635,425,30,30);
	BLOCK28 = new Block(665,425,30,30);
	BLOCK29 = new Block(695,425,30,30);
	
	BLOCK31 = new Block1(515,395,30,30);
	BLOCK32 = new Block1(545,395,30,30);
	BLOCK33 = new Block1(575,395,30,30);
	BLOCK34 = new Block1(605,395,30,30);
	BLOCK35 = new Block1(635,395,30,30);
	BLOCK36 = new Block1(665,395,30,30);

	BLOCK37 = new Block2(545,365,30,30);
	BLOCK38 = new Block2(575,365,30,30);
	BLOCK39 = new Block2(605,365,30,30);
	BLOCK40 = new Block2(635,365,30,30);

	BLOCK41 = new Block3(575,335,30,30);
	BLOCK42 = new Block3(605,335,30,30);

	BLOCK43 = new Block4(590,305,30,30);

	polygon1 = new bob(100,400,30);

	Slingshot = new slingshot(polygon1.body,{x:120,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  ground1.display();
  ground2.display();
  BLOCK1.display();
  BLOCK2.display();
  BLOCK3.display();
  BLOCK4.display();
  BLOCK5.display();
  BLOCK6.display();
  BLOCK7.display();
  BLOCK8.display();
  BLOCK9.display();
  BLOCK10.display();
  BLOCK11.display();
  BLOCK12.display();
  BLOCK13.display();
  BLOCK14.display();
  BLOCK15.display();
  BLOCK16.display();
  BLOCK17.display();
  BLOCK18.display();
  BLOCK19.display();
  BLOCK20.display();
  BLOCK21.display();
  BLOCK22.display();
  BLOCK23.display();
  BLOCK24.display();
  BLOCK25.display();
  BLOCK26.display();
  BLOCK27.display();
  BLOCK28.display();
  BLOCK29.display();
  BLOCK31.display();
  BLOCK32.display();
  BLOCK33.display();
  BLOCK34.display();
  BLOCK35.display();
  BLOCK36.display();
  BLOCK37.display();
  BLOCK38.display();
  BLOCK39.display();
  BLOCK40.display();
  BLOCK41.display();
  BLOCK42.display();
  BLOCK43.display();
  polygon1.display();
  Slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})  
	}
	
	function mouseReleased(){
	 Slingshot.fly(); 
	}
  
	function keyPressed(){
		if(keyCode === 32){
		Slingshot.attach(this.polygon1)
		}
	}



