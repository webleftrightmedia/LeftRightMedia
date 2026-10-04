const fs = require('fs');
const { PNG } = require('pngjs');
const path = require('path');

const dir = 'd:/LeftRightMedia/client/src/assets';
const files = [
  'hero-cafe.png',
  'panel-retail.png',
  'panel-commercial.png',
  'panel-event.png',
  'panel-taxi.png',
  'panel-public-space.png'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  const data = fs.readFileSync(filePath);
  const png = PNG.sync.read(data);
  
  let minX = png.width, minY = png.height, maxX = 0, maxY = 0;
  let orangeCount = 0;
  
  let leftEdgeTop = png.height, leftEdgeBottom = 0;
  let rightEdgeTop = png.height, rightEdgeBottom = 0;
  
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      
      // Detect orange/reddish pixels (the old LRM ads were orange)
      if (r > 180 && g < 140 && b < 80 && r > g * 1.5) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        orangeCount++;
        
        if (x < png.width / 2) {
            if (y < leftEdgeTop) leftEdgeTop = y;
            if (y > leftEdgeBottom) leftEdgeBottom = y;
        } else {
            if (y < rightEdgeTop) rightEdgeTop = y;
            if (y > rightEdgeBottom) rightEdgeBottom = y;
        }
      }
    }
  }
  
  if (orangeCount < 50) {
     console.log(`${file}: NO ORANGE DETECTED`);
     return;
  }
  
  const pTop = (minY / png.height * 100).toFixed(1);
  const pLeft = (minX / png.width * 100).toFixed(1);
  const pWidth = ((maxX - minX) / png.width * 100).toFixed(1);
  const pHeight = ((maxY - minY) / png.height * 100).toFixed(1);
  
  const leftH = leftEdgeBottom - leftEdgeTop;
  const rightH = rightEdgeBottom - rightEdgeTop;
  let perspective = "rotateY(0deg)";
  if (leftH > rightH + 5) perspective = "perspective(400px) rotateY(10deg)";
  if (rightH > leftH + 5) perspective = "perspective(400px) rotateY(-10deg)";
  
  console.log(`\n--- ${file} ---`);
  console.log(`{ top: "${pTop}%", left: "${pLeft}%", width: "${pWidth}%", height: "${pHeight}%", transform: "${perspective}" }`);
});
