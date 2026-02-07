registerSketch('sk2', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    angleMode(DEGREES); 
    textAlign(CENTER, CENTER);
  }
  function draw() {
    background(30);
  
    let h = hour();
    let m = minute();
    let s = second();
  
    //Board behind clock
    fill(50);
    stroke(200);
    strokeWeight(4);
    rect(125, 175, 250, 150, 20);
  
    // Legs
    stroke(200);
    line(165, 325, 145, 360);
    line(335, 325, 355, 360);
  }
})
