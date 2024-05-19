// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let questionCount = 0;
  let totalScore = 0;
  let consecutiveScore = 0;
  
  for await (const line of rl) {
    if (!questionCount) {
      questionCount = +line;
      continue;
    } else {
      for (let i = 0; i < line.length; i++) {
        const l = line[i];
        
        if (l === "O") {
          totalScore++;
          totalScore += consecutiveScore;
          consecutiveScore++;
        } else {
          consecutiveScore = 0;
        }
      }
      
      console.log(totalScore)
      break;
    }
  }
  
  rl.close();
  process.exit();
})();
