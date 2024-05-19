const readline = require('readline');
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  
  for await (const line of rl) {
    console.log('Hello Goorm! Your input is', line);
    rl.close();
  }
  
  process.exit();
})();