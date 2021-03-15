class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 225;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2.5);
    stroke('Black');
    fill('lightgreen');
    rect(0, 0, this.width, this.height);
    pop();
    console.log(this.body.speed);
    if (this.body.speed < 3)
    {
      Block.display();
    } 
    else 
    {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      //rect(this.body.position.x, this.body.position.y, 50, 50);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
};
