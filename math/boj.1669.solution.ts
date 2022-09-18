function solution([X, Y]: [number, number]) {
	const diff = Y - X;
	let days = 2;

	if (diff <= 2) return diff;

	while (true) {
		if (days * (days - 1) < diff && diff <= days * days) return 2 * days - 1;
		else if (days * days < diff && diff <= days * (days + 1)) return 2 * days;

		days += 1;
	}
}

const fs = require("fs");
const filepath = "./boj.1669.input.txt"; // process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filepath).toString().trim();

console.log(solution(input.split(" ").map(Number)));

export {};
