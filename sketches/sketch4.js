registerSketch("sk4", function (p) {
  p.setup = function () {
    p.createCanvas(500, 500);
    p.textAlign(p.CENTER, p.CENTER);
    p.rectMode(p.CENTER);
  };

  p.draw = function () {
    p.background(30);

    // time
    let h = p.hour();
    let m = p.minute();
    let s = p.second();

    // center the drawing like sk3 does
    p.push();
    p.translate(p.width / 2, p.height / 2);

    // clock body
    p.fill(40);
    p.stroke(180);
    p.strokeWeight(5);
    p.rect(0, 0, 320, 180, 25);

    // grill bar (top)
    p.noStroke();
    p.fill(60);
    p.rect(0, -70, 260, 20, 10);

    // legs
    p.stroke(180);
    p.strokeWeight(4);
    p.line(-120, 90, -140, 115);
    p.line(120, 90, 140, 115);

    // time string
    let timeStr = p.nf(h, 2) + ":" + p.nf(m, 2) + ":" + p.nf(s, 2);

    // digital time
    p.noStroke();
    p.fill(0, 255, 120);
    p.textSize(52);
    p.text(timeStr, 0, 5);

    // label
    p.fill(180);
    p.textSize(16);
    p.text("ALARM CLOCK", 0, 65);

    // blinking light
    p.noStroke();
    p.fill(s % 2 === 0 ? p.color(255, 60, 60) : p.color(90));
    p.ellipse(130, -70, 10, 10);

    p.pop();
  };
});

