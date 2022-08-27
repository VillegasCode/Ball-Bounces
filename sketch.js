function setup() {
  // Create a CANVAS with WIDTH and HEIGHT of BROWSER
  createCanvas(windowWidth,windowHeight);

  //Hidden cursor
  //noCursor();

  //DOWN FRAMERATE (Bajar los Cuadros por segundo) 60 como máximo
  //frameRate(60);
}

let i = 0;
let j = 0;

function draw() {
  // put drawing code here
     background(255,0,0);
     strokeWeight(10);
     stroke(255,0,0);
     fill("blue");
     if (i <= windowWidth || j <= windowHeight) {
      //ellipse(random(width), random(height), 50,50);
      ellipse(i,j,50,50)
      i++;
      j++;
    }
    else {
      j = 0;
      i = 0;
    }
}
     
function windowResized() {
      resizeCanvas(windowWidth,windowHeight);
      background(200);
}