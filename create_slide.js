const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'BLAZE - Guide Gate Guard';
pres.author = 'John';

// Colors
const DARK_BG = "1A1A2E";
const FIRE_ORANGE = "FF6B35";
const FIRE_YELLOW = "F7C531";
const WARM_WHITE = "FAFAFA";
const MUTED_TEXT = "A0A0B0";

// ============ SLIDE 1: The Main Slide ============
let slide = pres.addSlide();
slide.background = { color: DARK_BG };

// Fire emoji / icon at top
slide.addText("🔥", {
  x: 0, y: 0.4, w: 10, h: 0.8,
  fontSize: 48, align: "center"
});

// BLAZE title
slide.addText("BLAZE", {
  x: 0, y: 1.1, w: 10, h: 0.8,
  fontSize: 60, fontFace: "Arial Black", color: WARM_WHITE,
  align: "center", bold: true
});

// Tagline
slide.addText("Build fast. Ship safe. Sleep well.", {
  x: 0, y: 1.85, w: 10, h: 0.4,
  fontSize: 20, fontFace: "Arial", color: MUTED_TEXT,
  align: "center", italic: true
});

// Three boxes for Guide, Gate, Guard
const boxY = 2.6;
const boxW = 2.4;
const boxH = 1.8;
const gap = 0.5;
const totalWidth = (boxW * 3) + (gap * 2);
const startX = (10 - totalWidth) / 2;

// GUIDE box
slide.addShape(pres.shapes.RECTANGLE, {
  x: startX, y: boxY, w: boxW, h: boxH,
  fill: { color: "2A2A4E" },
  line: { color: FIRE_ORANGE, width: 2 }
});
slide.addText("GUIDE", {
  x: startX, y: boxY + 0.25, w: boxW, h: 0.5,
  fontSize: 24, fontFace: "Arial Black", color: FIRE_ORANGE,
  align: "center", bold: true
});
slide.addText("Helps you\nbuild", {
  x: startX, y: boxY + 0.85, w: boxW, h: 0.8,
  fontSize: 16, fontFace: "Arial", color: WARM_WHITE,
  align: "center", valign: "top"
});

// Arrow 1
slide.addText("→", {
  x: startX + boxW, y: boxY + 0.6, w: gap, h: 0.6,
  fontSize: 28, color: MUTED_TEXT, align: "center"
});

// GATE box
const gateX = startX + boxW + gap;
slide.addShape(pres.shapes.RECTANGLE, {
  x: gateX, y: boxY, w: boxW, h: boxH,
  fill: { color: "2A2A4E" },
  line: { color: FIRE_YELLOW, width: 2 }
});
slide.addText("GATE", {
  x: gateX, y: boxY + 0.25, w: boxW, h: 0.5,
  fontSize: 24, fontFace: "Arial Black", color: FIRE_YELLOW,
  align: "center", bold: true
});
slide.addText("Checks\nyour code", {
  x: gateX, y: boxY + 0.85, w: boxW, h: 0.8,
  fontSize: 16, fontFace: "Arial", color: WARM_WHITE,
  align: "center", valign: "top"
});

// Arrow 2
slide.addText("→", {
  x: gateX + boxW, y: boxY + 0.6, w: gap, h: 0.6,
  fontSize: 28, color: MUTED_TEXT, align: "center"
});

// GUARD box
const guardX = gateX + boxW + gap;
slide.addShape(pres.shapes.RECTANGLE, {
  x: guardX, y: boxY, w: boxW, h: boxH,
  fill: { color: "2A2A4E" },
  line: { color: FIRE_ORANGE, width: 2 }
});
slide.addText("GUARD", {
  x: guardX, y: boxY + 0.25, w: boxW, h: 0.5,
  fontSize: 24, fontFace: "Arial Black", color: FIRE_ORANGE,
  align: "center", bold: true
});
slide.addText("Watches\nproduction", {
  x: guardX, y: boxY + 0.85, w: boxW, h: 0.8,
  fontSize: 16, fontFace: "Arial", color: WARM_WHITE,
  align: "center", valign: "top"
});

// Bottom tagline - the kicker
slide.addText("We don't vibe code. We BLAZE.", {
  x: 0, y: 4.85, w: 10, h: 0.5,
  fontSize: 22, fontFace: "Arial", color: WARM_WHITE,
  align: "center", bold: true
});

// Save
pres.writeFile({ fileName: "/home/claude/blaze/BLAZE_Slide.pptx" })
  .then(() => console.log("Created: BLAZE_Slide.pptx"))
  .catch(err => console.error(err));
