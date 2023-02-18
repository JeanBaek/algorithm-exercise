const fs = require("fs");
const filePath = "./boj.1105.input.txt"; // file path: process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = ([from, to]: [string, string]) => {
	let eightCount = 0;

	// 자리수가 다르면 8이 무조건 안들어갈 수 있음
	if (from.length !== to.length) return eightCount;

	// 자리수가 같으면 앞쪽부터 같은 자리수의 숫자가 둘다 8이어야 함
	for (let i = 0; i < from.length; i++) {
		// 같은 자리수의 숫자가 서로 다르면 종료;
		if (from[i] !== to[i]) break;
		// 같은 자리수의 숫자가 둘다 8이면 count up;
		else if (from[i] === "8") eightCount++;
		// 같은 자리수의 숫자가 8이 아니지만 같은 숫자면 넘어가기;
		else continue;
	}

	return eightCount;
};

console.log(solution(input[0].split(" ")));

export {};
