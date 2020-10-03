class Block1{
    constructor(x,y,width,height){
var options={
isStatic:false
}
this.Visbility = 225;
this.body = Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.width=width;
this.height=height;
}
display(){
//push();
if(this.body.speed < 3){
 var angle = this.body.angle;
  var pos= this.body.position;
  push(); 
  translate(pos.x, pos.y); 
  rotate(angle);
  rectMode(CENTER);
  fill("yellow");
 rect(0,0,this.width, this.height);
 pop();
}
else{
World.remove(world,this.body);
push();
this.Visbility=this.Visbility-5;
pop()
}
//var pos=this.body.position
//rectMode(CENTER);

//rect(pos.x,pos.y,this.width,this.height);
//pop(); 
}
}