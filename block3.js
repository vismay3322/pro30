class Block3{
    constructor(x,y,width,height){
var options={
isStatic:false
}
this.body = Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.width=width;
this.height=height;
}
display(){
    if(this.body.speed < 3){
        var angle = this.body.angle;
         var pos= this.body.position;
         push(); 
         translate(pos.x, pos.y); 
         rotate(angle);
         rectMode(CENTER);
         fill("blue");
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
       World.remove(world,this.body);
       push();
       this.Visbility=this.Visbility-5;
       pop()
       }  
}
}