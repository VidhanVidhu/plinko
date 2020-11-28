var Engine = Matter.Engine,
 World= Matter.World,
 Events= Matter.Events,
 Bodies = Matter.Bodies;

var score = 0;
var divisionHight = 300;

var particles = [];
var plinkos = [];
function setup() {
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);
    //if (particlesGroup.isTouching(ground)){
     //   score++;
    //  }
   for(var k = 0; k<=width; k = k+80){
      divisions.push(new Divisions(k,height-divisionHight/2,10,divisionHight))  
    }
    for(var j = 75; j<=width; j = j+50){
     plinkos.push(new Plinko(j,75))  
    }
    for(var j = 50; j<=width; j = j+50){
      plinkos.push(new Plinko(j,175))  
     }
     for(var j = 75; j<=width; j = j+50){
      plinkos.push(new Plinko(j,275))  
     }
     for(var j = 50; j<=width; j = j+50){
      plinkos.push(new Plinko(j,375))  
     }


}

function draw() {
  background(0,0,0); 
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50) 
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}
