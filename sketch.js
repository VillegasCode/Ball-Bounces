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
     if (i <= windowHeight || j <= windowHeight && step === 0) {
      //ellipse(random(width), random(height), 50,50);
      i++;
      j++;
      if (j > windowHeight) {
        step = 1;
        j = windowHeight*1;
        i = (windowWidth*0.5);
      }
      else {
        step = 0;
      }
    }
    else if (i <= windowHeight || j <= windowHeight && step === 1) {
      i++;
      j--;
      if (i > windowWidth) {
        step = 0;
        j = 0;
        i = 0;
      }
      else {
        step = 1;
      }
    }
    ellipse(i,j,150,150)
}
     
function windowResized() {
      resizeCanvas(windowWidth,windowHeight);
      background(200);
}