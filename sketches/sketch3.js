registerSketch("sk3", function (p) {
  p.setup = function () {
    p.createCanvas(500, 500);
    p.angleMode(p.DEGREES);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(30);
    p.translate(width / 2, height / 2);

  //set up time based on hour, minute, second
  let h = p.hour() % 12;
  let m = p.minute();
  let s = p.second();

  let secProgress = s / 60;
  let minProgress = (m + s / 60) / 60;
  let hourProgress = (h + m / 60) / 12;

  // Draw rings to simulate apple watch
  drawRing(240, secProgress, p.color(255, 80, 80));   // seconds
  drawRing(185, minProgress, p.color(80, 255, 120));  // minutes
  drawRing(130, hourProgress, p.color(80, 180, 255)); // hours

   // Digital time in center
   p.noStroke();
   p.fill(255);
   p.textAlign(CENTER, CENTER);
   p.textSize(28);
   p.text(
     p.nf(p.hour(), 2) + ":" + p.nf(m, 2) + ":" + p.nf(s, 2),
     0,
     0
   );
 }
 //function to draw the ring
 function drawRing(size, progress, col) {
  p.stroke(50);
  p.strokeWeight(22);
  p.noFill();
  p.ellipse(0, 0, size, size);

  p.stroke(col);
  let angle = map(progress, 0, 1, 0, 360);
  p.arc(0, 0, size, size, -90, -90 + angle);
}
})
