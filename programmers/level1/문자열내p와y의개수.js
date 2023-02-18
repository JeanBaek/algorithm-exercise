function solution(s) {
	let diff = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "p" || s[i] === "P") diff++;
		else if (s[i] === "y" || s[i] === "Y") diff--;
	}

	return diff ? false : true;
}
