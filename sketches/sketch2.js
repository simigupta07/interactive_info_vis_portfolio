registerSketch("sk2", function (p) {
  p.setup = function () {
    p.createCanvas(800, 800);

    p.angleMode(p.DEGREES);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(30);
    
    // Time (instance mode uses p.hour(), p.minute(), p.second())
    let h = p.hour();
    let m = p.minute();
    let s = p.second();

    // Board behind clock
    p.fill(50);
    p.stroke(200);
    p.strokeWeight(4);
    p.rect(125, 175, 450, 200, 20);

    // Legs
    p.stroke(200);
    p.line(180, 375, 145, 420);
    p.line(520, 375, 555, 420);

    // Analog clock face
  p.push();
  p.translate(width / 2, 250); // center of clock

  p.stroke(200);
  p.strokeWeight(4);
  p.fill(50);
  p.ellipse(0, 0, 200, 200); // clock circle

  //Hour marks
  p.strokeWeight(2);
  for (let i = 0; i < 12; i++) {
    let angle = i * 30;
    let x1 = cos(angle - 90) * 80;
    let y1 = sin(angle - 90) * 80;
    let x2 = cos(angle - 90) * 90;
    let y2 = sin(angle - 90) * 90;
    p.line(x1, y1, x2, y2);
  }
}
});
