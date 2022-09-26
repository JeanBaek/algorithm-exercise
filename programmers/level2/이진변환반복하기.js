function solution(s) {
	let transCount = 0;
	let removedZeroCount = 0;
	let x = s;

	while (x !== "1") {
		const targetLen = x.match(/1/gi).length;

		transCount++;
		removedZeroCount += x.length - targetLen;
		x = targetLen.toString(2);
	}

	return [transCount, removedZeroCount];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
