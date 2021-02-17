class Player{
    constructor(x,y,radius){
        var options = {
            'restitution' : 0,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.bodies = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.bodies);
    }
    display(){
        var angle = this.bodies.angle;
        push();
        translate(this.bodies.position.x, this.bodies.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("Black")
        strokeWeight(5)
        stroke("Red")
        ellipse(0, 0, this.radius);
        pop();
        
    }
}