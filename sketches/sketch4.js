registerSketch("sk4", function (p) {
p.setup = function () {
  p.createCanvas(500, 500);
  p.textAlign(p.CENTER, p.CENTER);
  p.rectMode(p.CENTER);
};
  
  p.draw = function () {
    p.background(30);
  
    let h = p.hour();
    let m = p.minute();
    let s = p.second();
  
  // clock body
  p.fill(40);
  p.stroke(180);
  p.strokeWeight(5);
  p.rect(p.width/2, p.height/2, 320, 180, 25);

   //the bar that shows the grill
   p.noStroke();
   p.fill(60);
   p.rect(p.width/2, p.height/2 - 70, 260, 20, 10);
 
   //legs
   p.stroke(180);
   p.strokeWeight(4);
   p.line(p.width/2 - 120, p.height/2 + 90, p.width/2 - 140, p.height/2 + 115);
   p.line(p.width/2 + 120, p.height/2 + 90, p.width/2 + 140, p.height/2 + 115);

   //show the time
  let timeStr =
  p.nf(h, 2) + ":" +
  p.nf(m, 2) + ":" +
  p.nf(s, 2);

//show time in digital style
p.noStroke();
p.fill(0, 255, 120);
p.textSize(52);
p.text(timeStr, p.width/2, p.height/2);

//label
p.fill(180);
p.textSize(16);
p.text("ALARM CLOCK", p.width/2, p.height/2 + 55);


//light
p.fill(255, 60, 60);
p.ellipse(p.width/2 + 130, p.height/2 - 70, 10, 10);
  }
});