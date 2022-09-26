function solution(s) {
	return s
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" ");
}

console.log(solution("1Evvv         1C      10      1W"));
