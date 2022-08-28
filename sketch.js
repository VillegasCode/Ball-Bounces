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

// Update the font like if was P5.JS let f = createFont("Arial", 36);
function draw() {
    // put drawing code here
     background(255,255,255); //background color
     strokeWeight(10); //Size border of ball
     stroke(255,0,0); // stroke color
     fill("blue"); //color fill
     if (i <= windowHeight || j <= windowHeight && step === 0) {
      i++;
      j++;
      if (j === windowHeight || i === windowWidth) {
        step = 1;
      }
    }
    else if (i <= windowHeight+1 || j <= windowHeight+1 && step === 1) {
      i++;
      j--;
      if (i >= windowWidth+75) {
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