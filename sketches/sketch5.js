// Example 2
registerSketch('sk5', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

    // X-axis categories
    let categories = [
      "Biochemical Incomplete",
      "Structural\nIncomplete",
      "Intermediate",
      "Excellent"
    ];
  
    let recurrenceYes = [25, 80, 20, 20];
    let recurrenceNo  = [25, 20, 70, 100];
  
    let categoryDescriptions = [
      "Biochemical Incomplete: Lab markers show remaining tumor",
      "Structural Incomplete: Imaging may show remaining tumor",
      "Intermediate: Unclear if disease is fully gone, some minor abnormal results may be present",
      "Excellent: No signs of disease, lab tests and scans are normal"
    ];
  
    let selectedGroup = -1;
  
    p.setup = function() {
      p.createCanvas(1080, 1080);
      p.textFont("Arial");
    };
  
    p.draw = function() {
      p.background(250);
  
      drawPanels();
      drawTopPanel();
      drawChartPanel();
      drawBottomPanel();
    };
  
    function drawPanels() {
      p.noStroke();
  
      p.fill(245);
      p.rect(0, 0, p.width, 170);  
  
      p.fill(255);
      p.rect(0, 170, p.width, 720); 
  
      p.fill(245);
      p.rect(0, 890, p.width, 190); 
    }
  
    function drawTopPanel() {
      p.fill(0);
      p.textAlign(p.CENTER);
  
      p.textSize(40);
      p.text("Treatment Response & Thyroid Recurrence", p.width/2, 70);
  
      p.textSize(22);
      p.fill(70);
      p.text(
        "Patients with stronger treatment response experience fewer recurrences",
        p.width/2,
        120
      );
    }
  
    function drawChartPanel() {
      drawAxes();
      drawBars();
      drawLegend();
    }
  
    function drawAxes() {
      p.stroke(0);
  
      // axes
      p.line(120, 820, 980, 820); // x-axis
      p.line(120, 260, 120, 820); // y-axis
  
      p.push();
      p.translate(50, 540);
      p.rotate(-p.HALF_PI);
      p.textAlign(p.CENTER);
      p.textSize(16);
      p.text("Patient Count", 0, 0);
      p.pop();
  
      // y-ticks
      let maxCount = p.max(p.max(recurrenceYes), p.max(recurrenceNo));
      for (let i = 0; i <= maxCount; i += 50) {
        let y = p.map(i, 0, maxCount, 820, 260);
        p.line(115, y, 120, y);
        p.noStroke();
        p.fill(0);
        p.textAlign(p.RIGHT);
        p.text(i, 110, y + 5);
        p.stroke(0);
      }
    }
  
    function drawBars() {
      let barWidth = 40;
      let groupSpacing = 180;
      let maxCount = p.max(p.max(recurrenceYes), p.max(recurrenceNo));
  
      for (let i = 0; i < categories.length; i++) {
        let xCenter = 220 + i * groupSpacing;
  
        let yesHeight = p.map(recurrenceYes[i], 0, maxCount, 0, 560);
        let noHeight = p.map(recurrenceNo[i], 0, maxCount, 0, 560);
  
        let yYes = 820 - yesHeight;
        let yNo = 820 - noHeight;
  
        let alpha = (selectedGroup === -1 || selectedGroup === i) ? 255 : 70;
  
        // No recurrence
        p.fill(80, 170, 90, alpha);
        p.rect(xCenter - 25, yNo, barWidth, noHeight);
  
        // Recurrence
        p.fill(200, 80, 80, alpha);
        p.rect(xCenter + 25, yYes, barWidth, yesHeight);
  
        // Counts above bars
        p.fill(0);
        p.textSize(14);
        p.textAlign(p.CENTER);
        p.text(recurrenceNo[i], xCenter - 25 + barWidth/2, yNo - 8);
        p.text(recurrenceYes[i], xCenter + 25 + barWidth/2, yYes - 8);
  
        // Category labels
        p.textSize(16);
        p.fill(0);
        p.text(categories[i], xCenter, 850);
  
        // Hover tooltips for bars
        if (p.mouseX > xCenter - 25 && p.mouseX < xCenter - 25 + barWidth &&
            p.mouseY > yNo && p.mouseY < 820) {
          showTooltip(p.mouseX, p.mouseY, "No recurrence: " + recurrenceNo[i]);
        }
        if (p.mouseX > xCenter + 25 && p.mouseX < xCenter + 25 + barWidth &&
            p.mouseY > yYes && p.mouseY < 820) {
          showTooltip(p.mouseX, p.mouseY, "Recurrence: " + recurrenceYes[i]);
        }
  
        // Hover tooltips for category labels
        if (p.mouseX > xCenter - 50 && p.mouseX < xCenter + 50 &&
            p.mouseY > 840 && p.mouseY < 870) {
          showTooltip(p.mouseX, p.mouseY, categoryDescriptions[i]);
        }
      }
    }
  
    function drawLegend() {
      let legendX = 820;
      let legendYStart = 300;
      let boxSize = 20;
      let spacing = 35;
  
      // No recurrence
      p.fill(80,170,90);
      p.rect(legendX, legendYStart, boxSize, boxSize);
      p.fill(0);
      p.textAlign(p.LEFT);
      p.text("No Recurrence", legendX + boxSize + 10, legendYStart + 15);
  
      // Recurrence
      p.fill(200,80,80);
      p.rect(legendX, legendYStart + spacing, boxSize, boxSize);
      p.fill(0);
      p.text("Recurrence", legendX + boxSize + 10, legendYStart + spacing + 15);
    }
  
    function drawBottomPanel() {
      p.fill(0);
      p.textAlign(p.CENTER);
  
      p.textSize(26);
      p.text(
        "Key Insight: Excellent treatment response is linked to the lowest recurrence rates.",
        p.width/2,
        950
      );
  
      p.textSize(18);
      p.fill(80);
      p.text("Hover on a treatment group to understand what it means", p.width/2, 1000);
    }
  
    p.mousePressed = function() {
      let groupSpacing = 180;
      for (let i = 0; i < categories.length; i++) {
        let xCenter = 220 + i * groupSpacing;
        if (p.mouseX > xCenter - 60 && p.mouseX < xCenter + 60 &&
            p.mouseY > 260 && p.mouseY < 820) {
          selectedGroup = i;
          return;
        }
      }
      selectedGroup = -1;
    };
  
    function showTooltip(x, y, msg) {
      p.textSize(14);
      p.textAlign(p.LEFT);
  
      let padding = 10;
      let textWidthValue = p.textWidth(msg);
      let rectWidth = textWidthValue + padding * 2;
      let rectHeight = 20 + padding;
  
      p.fill(0);
      p.rect(x + 12, y - 30, rectWidth, rectHeight, 6);
  
      p.fill(255);
      p.text(msg, x + 12 + padding, y - 12);
    }
  
  });
