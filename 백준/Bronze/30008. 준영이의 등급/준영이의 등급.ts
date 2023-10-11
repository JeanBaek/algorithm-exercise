const fs = require("fs");
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim().split("\n");

function solution([NK, strG]: string[]) {
    const [N, K] = NK.split(' ').map(Number);
    const GList = strG.split(' ').map(Number);

    return GList.forEach(g => console.log(getGrade(Math.floor(g * 100 / N), N)));
}

solution(input)

function getGrade(ratio: number, N: number) {
    if (ratio <= 4) return 1;
    if (4 < ratio && ratio <= 11) return 2;
    if (11 < ratio && ratio <= 23) return 3;
    if (23 < ratio && ratio <= 40) return 4;
    if (40 < ratio && ratio <= 60) return 5;
    if (60 < ratio && ratio <= 77) return 6;
    if (77 < ratio && ratio <= 89) return 7;
    if (89 < ratio && ratio <= 96) return 8;
    if (96 < ratio) return 9;
}
