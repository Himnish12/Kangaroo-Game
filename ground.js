//class is the blueprint
class Ground 
{
  //to construct the object and be specific
  constructor(x, y, w,h) 
  {
    //let is a variable and this section will use both the libraries
    let options = {
      //stable, not moving 
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
  // track all the changing positions
    push();
    //to keep things in center of screen 
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);
    //reser everything
    pop();
  }
}
