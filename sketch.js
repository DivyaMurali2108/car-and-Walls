var wall,thikness;
var bullet,speed ,weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(233,321) ;
  thickness = random(22,83);
  weight = random (30,52);
  
  weight = (400,1500)

  bullet = createSprite(50,200,50,5);
  wall = createSprite(1200,200,thickness,height/2)
  bullet.velocityX = speed;
}




  
function draw() {
  background(255,255,255);

  if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 *weight * speed* speed/(thickness *thickness *thickness)

if(damage>10)
{
  wall.shapecolor=color(255,0,0)
}

if(damage<10)
{
  wall.shpecolor=color(0,255,0)
}
}
  drawSprites();

}
function hascollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x+ lbullet.width;
  wallleftEdge=lwall.x;
  if (bulletRightEdge>=wallleftEdge)
   {
     return true
   }
  return false
}