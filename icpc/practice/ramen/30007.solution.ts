const fs = require("fs");
const filepath = "./30007.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([N, ...inputs]: string[]) {
    return inputs.map(input => {
        const [A, B, X] = input.split(' ').map(Number)
        const W = A * (X - 1) + B;

        console.log(W)
    })
}

solution(input);

export {};
