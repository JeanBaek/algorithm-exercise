function solution(progresses, speeds) {
	return progresses
		.map((p, i) => [Math.ceil((100 - p) / speeds[i]), 1])
		.reduce((p, c, i) => {
			if (i && p[p.length - 1][0] > c[0]) p[p.length - 1][1]++;
			else p.push(c);

			return p;
		}, [])
		.map(([day, count]) => count);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
