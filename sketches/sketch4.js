registerSketch("sk4", function (p) {
p.setup = function setup() {
  createCanvas(500, 500);
  textAlign(p.CENTER, p.CENTER);
  rectMode(p.CENTER);
};
  
  p.draw = function() {
  p.background(25);
  
  let h = p.hour();
  let m = p.minute();
  let s = p.second();
  
  // clock body
  p.fill(40);
  p.stroke(180);
  p.strokeWeight(5);
  p.rect(p.width/2, p.height/2, 320, 180, 25);

   //the bar that shows the grill
   noStroke();
   fill(60);
   rect(width/2, height/2 - 70, 260, 20, 10);
 
   //legs
   stroke(180);
   strokeWeight(4);
   line(width/2 - 120, height/2 + 90, width/2 - 140, height/2 + 115);
   line(width/2 + 120, height/2 + 90, width/2 + 140, height/2 + 115);

  }
});