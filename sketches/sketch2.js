registerSketch("sk2", function (p) {
  p.setup = function () {
    // Must be <= 800x800 per spec
    p.createCanvas(700, 450);

    p.angleMode(p.DEGREES);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(30);

    // Title text
    p.fill(100, 150, 240);
    p.textSize(32);
    p.text("HWK #4. A", p.width / 2, 50);

    // Time (instance mode uses p.hour(), p.minute(), p.second())
    let h = p.hour();
    let m = p.minute();
    let s = p.second();

    // Example: show digital time (optional but useful while debugging)
    p.fill(220);
    p.textSize(20);
    p.text(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`, p.width / 2, 85);

    // Board behind clock
    p.fill(50);
    p.stroke(200);
    p.strokeWeight(4);
    p.rect(125, 175, 450, 200, 20);

    // Legs
    p.stroke(200);
    p.line(180, 375, 145, 420);
    p.line(520, 375, 555, 420);
  };
});
