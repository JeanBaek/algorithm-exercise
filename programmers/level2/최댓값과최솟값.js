function solution(s) {
	const nums = s.split(" ").map(Number);

	return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
