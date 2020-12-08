class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'friction':0.5,
            'restitution':0.3,
            'density':1.2
        }

        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.x=x;
        this.y=y;
        this.r=r;   
        World.add(world, this.body);
    }

    display(){
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("red");
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}