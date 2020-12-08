class Ground{
    constructor(x,y){
         var options={isStatic:true}

         this.body=Bodies.rectangle(x, y, this.width, this.height);
         this.height=height;
         this.width=width;
         World.add(world, this.body);
    }

    display(){
         var position=this.body.position;

        push();
        translation(this.body.position.x, this.body.position.y);
        fill("white");
        Body(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();        
    }
}