//creating bullet and wall and their thickness,speed and weight
var bullet, wall;
var thickness, speed, weight;

function setup() {

  //creating canvas
  createCanvas(1600,400);

  //giving random values to speed, weight and thickness
  speed = random(223,321);
  weight = random(31,152);
  thickness = random(22,83);

  //creating bullet sprite and changing its color
  bullet = createSprite(50,200,100,50);
  bullet.shapeColor = color(255);

  //creating wall sprite and changing its color
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //assigning speed to the bullet
  bullet.velocityX = speed;
}

function draw() {

  //changing background color
  background(0);  

  if(bullet.collide(wall)){
    //creating damage variable and assigning zero velocity
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;

    if(damage>10){
      //changing wall color to red when wall is ineffective
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      //changing wall color to green when wall is effective
      wall.shapeColor = color(0,255,0);
    }
  }

  //drawing sprites
  drawSprites();
}