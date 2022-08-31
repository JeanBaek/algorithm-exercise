const fs = require("fs");
const filePath = "./boj.1697.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split(" ")
	.map(Number);

function solution([start, end]: [number, number]) {
	const visited = new Array(100001).fill(false);
	let queue: number[] = [start];
	let count = 0;

	while (queue.length) {
		const temp = [];

		for (let v of queue) {
			if (v === end) return count;

			for (let newV of [v * 2, v + 1, v - 1]) {
				if (visited[newV] || newV < 0 || newV > 100000) continue;

				visited[newV] = 1;
				temp.push(newV);
			}
		}

		queue = temp;
		count++;
	}
}

console.log(solution(input));

export {};
