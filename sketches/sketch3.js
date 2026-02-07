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
  let h = hour() % 12;
  let m = minute();
  let s = second();

  let secProgress = s / 60;
  let minProgress = (m + s / 60) / 60;
  let hourProgress = (h + m / 60) / 12;

  // Draw rings to simulate apple watch
  p.drawRing(240, secProgress, color(255, 80, 80));   // seconds
  p.drawRing(185, minProgress, color(80, 255, 120));  // minutes
  p.drawRing(130, hourProgress, color(80, 180, 255)); // hours

   // Digital time in center
   noStroke();
   fill(255);
   textAlign(CENTER, CENTER);
   textSize(28);
   text(
     nf(hour(), 2) + ":" + nf(m, 2) + ":" + nf(s, 2),
     0,
     0
   );
 }
})
