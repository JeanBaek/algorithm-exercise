declare var require: any;

const fs = require("fs")
const filePath = "./boj.6322.input.txt";  // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// TODO: 리팩토링 필수 ^-^

const getRestLength = ([a, b, c]: [number, number, number]) => {
    if (a === -1) {
        const valueA = Math.sqrt(c ** 2 - b ** 2);

        if (valueA > 0) {
            return `a = ${valueA.toFixed(3)}`
        } else return "Impossible."
    }

    if (b === -1) {
        const valueB = Math.sqrt(c ** 2 - a ** 2);

        if (valueB > 0) {
            return `b = ${valueB.toFixed(3)}`
        } else return "Impossible."
    }

    if (c === -1) {
        const valueC = Math.sqrt(a ** 2 + b ** 2);

        if (valueC > 0) {
            return `c = ${valueC.toFixed(3)}`
        } else return "Impossible."
    }

    return ""
}

const solution = (values: string[]) => {
    const restLengths: string[] = [];

    values.map((value, index) => {
        const [a, b, c] = value.split(" ");

        if (a === "0" && a === b && b === c) return;

        restLengths.push(`Triangle #${index + 1}` + "\n" + getRestLength([+a, +b, +c]) + "\n");
    })

    return restLengths.join("\n").trim();
}

console.log(solution(input));

export {};

