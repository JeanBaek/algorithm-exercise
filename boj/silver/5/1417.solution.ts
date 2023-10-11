const fs = require("fs");
const filepath = "./1417.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([N, mySupporter, ...supporters]: number[]) {
    if (!supporters.length) return 0;

    const oversizes = supporters.reduce((oversizes, supporter) => {
        if (supporter > mySupporter) {
            oversizes.oversizePeople += supporter - mySupporter;
            oversizes.oversizeCandidate += 1;
        }

        return oversizes;
    }, {oversizePeople: 0, oversizeCandidate: 0});

    return Math.ceil(oversizes.oversizePeople / oversizes.oversizeCandidate) || 1;
}

console.log(solution(input.map(Number)));

export {};
