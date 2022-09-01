function setup() {
  // Create a CANVAS with WIDTH and HEIGHT of BROWSER
  createCanvas(windowWidth,windowHeight);
}

let wBall = 150; //Size of the ball
let i = wBall/2; //axis X
let j = wBall/2; //axis Y
let borderHorizontal = 0; //Switch to bounce when hit with a horizontal border
let borderVertical = 0; //Switch to bounce when hit with a vertical border
// Update the font like if was P5.JS let f = createFont("Arial", 36);
function draw() {
    // put drawing code here
     background(255,255,255); //background color
     strokeWeight(10); //Size border of ball
     stroke(255,0,0); // stroke color
     fill("blue"); //color fill
     if (j <= windowHeight-(wBall/2) && j >= wBall/2 && i < windowWidth-(wBall/2) && i >= wBall/2 && borderHorizontal === 0 && borderVertical === 0) {
      i++;
      j++;
      if (j === windowHeight-(wBall/2)) {
        borderHorizontal = 1;
      }  
    } else if (j <= windowHeight-(wBall/2) && j > wBall/2 && i < windowWidth-(wBall/2) && i > wBall/2 && borderHorizontal === 1 && borderVertical === 0) {
      i++;
      j--;
      if (j === wBall/2) {
        borderHorizontal = 0;
      }
    } else if (i <= windowWidth - (wBall/2) && borderHorizontal === 0 || borderHorizontal === 1) {
      borderVertical = 1;
      if (i <= (windowWidth - (wBall/2)) && borderHorizontal === 0 && borderVertical === 1) {
        if (j <= (windowHeight - (wBall/2))) {
          i--;
          j++;
        }
        else if (j >= (windowHeight - (wBall/2)) && borderHorizontal === 0 && borderVertical === 1) {
          borderHorizontal = 1;
          j--;
        }
        }
      }
      if (j <= (windowHeight - (wBall/2)) && j >= (wBall/2) && i >= wBall/2 && i <= windowWidth - (wBall/2) && borderHorizontal === 1 && borderVertical === 1) {
          i--;
          j--;
      } else if (j <= wBall/2 && borderHorizontal === 1 && borderVertical === 1 && i <= wBall/2) {
          borderHorizontal = 0;
          borderVertical = 0;
          i= wBall/2;
          j= wBall/2;
          }
          else if (j <= wBall/2 && borderHorizontal === 1 && borderVertical === 1 && i >= wBall/2) {
            borderHorizontal = 0;
            i--;
            j++;
          }
          else if (j <= wBall/2 || j <= (windowHeight - (wBall/2)) && borderHorizontal === 1 && borderVertical === 1 && i <= wBall/2 && i <= (windowWidth - (wBall/2))) {
            borderHorizontal = 0;
            borderVertical = 0;
            i++;
            j++;
          }
          else if (borderHorizontal === 0 && borderVertical === 1 && i <= wBall/2) {
            borderVertical = 0;
            i++;
            j--;
          } else if (i > (windowWidth - (wBall/2)+2) || j > (windowHeight - (wBall/2)+2) || i < wBall/2 || j < wBall/2){
            borderHorizontal = 0;
            borderVertical = 0;
            i = wBall/2;
            j = wBall/2;
          }
    ellipse(i,j,wBall,wBall);
    text("Position i: " + i, 50, 20);
    text("Position j: " + j, 50, 45);
    text("windowWidth - (wBall/2): " + (windowWidth - (wBall/2)), 50, 70);
    text("windowHeight - (wBall/2): " + (windowHeight - (wBall/2)), 50, 120);
    text("borderHorizontal: " + borderHorizontal, 50, 170);
    text("borderVertical: " + borderVertical, 50, 220);
    }   
function windowResized() {
      resizeCanvas(windowWidth,windowHeight);
      background(200);
}