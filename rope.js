class Rope{
    constructor(bodyA, bodyB,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetx,y:this.offsety}
        }
       
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
   
    display(){



        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
var A1x=pointA.x;
var A1y=pointA.y;
var A2x=pointB.x+this.offsetx;
var A2y=pointB.y+this.offsety;
        line(A1x, A1y, A2x, A2y);
}
   
    
}