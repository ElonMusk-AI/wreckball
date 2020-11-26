class Building{
    constructor(x,y,width,height){
        var options = {
            friction : 1,
            restitution: 0.5,
            density: 2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        var ang  = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill("lightbrown");
        stroke("black");
        strokeWeight(5);
        rect(0, 0, this.width, this.height);
        pop();
    }
}