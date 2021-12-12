class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
    //tendency to come back to it's original position 
      this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 

    dettach()
    {
      // removing the world
      World.remove(engine.world,this.link);
     
    }
}

