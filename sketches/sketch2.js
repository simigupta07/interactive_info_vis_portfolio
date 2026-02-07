registerSketch("sk2", function (p) {
  p.setup = function () {
    // Keep it within spec AND predictable (don’t use windowWidth)
    p.createCanvas(500, 500);
    p.angleMode(p.DEGREES);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(30);

    let h = p.hour();
    let m = p.minute();
    let s = p.second();

    // Board behind clock
    const boardX = 125, boardY = 175, boardW = 250, boardH = 150;
    p.fill(50);
    p.stroke(200);
    p.strokeWeight(4);
    p.rect(boardX, boardY, boardW, boardH, 20);

    // Legs
    p.stroke(200);
    p.line(165, 325, 145, 360);
    p.line(335, 325, 355, 360);

    // Center of the board (NOT p.width/2)
    const cx = boardX + boardW / 2; // 250
    const cy = boardY + boardH / 2; // 250

    // Analog clock face
    p.push();
    p.translate(cx, cy);

    p.stroke(200);
    p.strokeWeight(4);
    p.fill(50);
    p.ellipse(0, 0, 200, 200);

    // Hour marks
    p.strokeWeight(2);
    for (let i = 0; i < 12; i++) {
      let angle = i * 30;
      let x1 = p.cos(angle - 90) * 80;
      let y1 = p.sin(angle - 90) * 80;
      let x2 = p.cos(angle - 90) * 90;
      let y2 = p.sin(angle - 90) * 90;
      p.line(x1, y1, x2, y2);
    }

    // Clock hand angles
    let secondAngle = p.map(s, 0, 60, 0, 360) - 90;
    let minuteAngle = p.map(m + s / 60, 0, 60, 0, 360) - 90;
    let hourAngle = p.map((h % 12) + m / 60, 0, 12, 0, 360) - 90;

    // Hour hand
    p.stroke(0, 255, 120);
    p.strokeWeight(6);
    p.line(0, 0, p.cos(hourAngle) * 40, p.sin(hourAngle) * 40);

    // Minute hand
    p.strokeWeight(4);
    p.line(0, 0, p.cos(minuteAngle) * 70, p.sin(minuteAngle) * 70);

    // Second hand
    p.stroke(255, 50, 50);
    p.strokeWeight(2);
    p.line(0, 0, p.cos(secondAngle) * 80, p.sin(secondAngle) * 80);

    p.pop();
  };
});
