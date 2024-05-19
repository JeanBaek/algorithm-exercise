const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let n = 0;
let vertices = [];

rl.on('line', (line) => {
  if (lineCount === 0) {
    n = parseInt(line);
  } else {
    const [x, y] = line.split(' ').map(Number);
    vertices.push({ x, y });
    if (vertices.length === n) {
      rl.close();
    }
  }
  lineCount++;
});

rl.on('close', () => {
  const horizontalLines = new Map();
  const verticalLines = new Map();
  
  for (let i = 0; i < n; i++) {
    const curr = vertices[i];
    const next = vertices[(i + 1) % n];
    
    if (curr.x === next.x) {
      // Vertical segment
      const minY = Math.min(curr.y, next.y) + 1;
      const maxY = Math.max(curr.y, next.y) - 1;
      for (let y = minY; y <= maxY; y++) {
        verticalLines.set(y, (verticalLines.get(y) || 0) + 1);
      }
    } else {
      // Horizontal segment
      const minX = Math.min(curr.x, next.x) + 1;
      const maxX = Math.max(curr.x, next.x) - 1;
      for (let x = minX; x <= maxX; x++) {
        horizontalLines.set(x, (horizontalLines.get(x) || 0) + 1);
      }
    }
  }
  
  // Find max intersections
  const maxHorizontalIntersections = Math.max(0, ...horizontalLines.values());
  const maxVerticalIntersections = Math.max(0, ...verticalLines.values());
  
  console.log(Math.max(maxHorizontalIntersections, maxVerticalIntersections));
});
