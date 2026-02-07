function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}
  
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
  }