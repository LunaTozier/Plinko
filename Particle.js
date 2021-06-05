class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.7,
            friction: 0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var particlepos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(particlepos.x,particlepos.y);
       
        fill(this.color);
        ellipse(0,0,this.radius*2);
        pop();
    }
}