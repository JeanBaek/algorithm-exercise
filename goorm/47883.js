// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  function solution(input) {
    const trimmedInput = input.trim();
    if (!trimmedInput) return 0;
    
    const words = trimmedInput.split(/\s+/);
    return words.length;
  }
  
  const wordCount = solution(line);
  console.log(wordCount);
  
  
  rl.close();
}).on("close", function() {
  process.exit();
});