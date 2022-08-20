const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split('\n');

function solution([len, ...times]: string[]) {
    let yCount = 0;
    let mCount = 0;
    
    times.forEach((t) => {
        yCount += Math.ceil( +t / 30 ); 
        mCount += Math.ceil( +t / 60 ); 
    })
    
    const yPhoneBill = 10 * yCount;
    const mPhoneBill = 15 * mCount;
    
    if (yPhoneBill > mPhoneBill) {
        return `M ${mPhoneBill}`;
    } else if (yPhoneBill < mPhoneBill) {
        return `Y ${yPhoneBill}`;
    } else {
        return `Y M ${yPhoneBill}`;
    }
}

console.log(solution(input));
