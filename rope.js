class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stifness:0.02,
            length:300
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push();
        strokeWeight(5);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}