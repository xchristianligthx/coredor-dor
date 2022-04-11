
//junte 3 proyectos, el de los globitos, y el de corredor, y el de el arco,
// mas el de t rex, puse las imagenes correctas, elimine lo que debia eliminar, y me deje de complicar la vida :D 
//por cierto el plus esta en que cuando precionas espacio salen monedas ;)
var ground, invisibleGround, groundImage;
var trex, trex_running, trex_collided;

var bow , arrow,  scene;
var bowImage,arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage,backgroundImage ;
var select_balloon=1
var score=0;


//bowruning = loadAnimation("jake1.png", "jake2.png", "jake3.png" ,"jake4.PNG" ,"jake5.png");

  
function preload(){
  
  backgroundImage = loadImage("path.png");
  
  bowImage = loadImage("coin.png");

  
  groundImage = loadImage("path.png")

  trex_running = loadAnimation("jake1.png", "jake2.png", "jake3.png" ,"jake4.PNG","jake5.png");


 trex_collided = loadImage("jake1.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(200,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.0;
  
trex = createSprite(200,350,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 1.0;
score = 0  
}

     
//}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityY = -3 
trex.y=World.mouseY;
    if (scene.y < 0){
      scene.y = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
  
 
  drawSprites();
}
    






