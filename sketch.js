function setup() {
  // Create a CANVAS with WIDTH and HEIGHT of BROWSER
  createCanvas(windowWidth,windowHeight);

  //Hidden cursor
  //noCursor();

  //DOWN FRAMERATE (Bajar los Cuadros por segundo) 60 como máximo
  //frameRate(60);
}

function draw() {
  // put drawing code here
     //background(200);
     strokeWeight(10);
     stroke(255,0,0);
     fill("blue");
     for(let i=0; i < 100; i++){
      ellipse(random(width), random(height), 50,50);
     }
}

function windowResized() {
      resizeCanvas(windowWidth,windowHeight);
      background(200);
}