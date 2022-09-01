// https://school.programmers.co.kr/learn/courses/30/lessons/77485?language=javascript

function solution(rows, columns, queries) {
	// FIXME: 아래 처럼 nested Array 생성하면 왜 안되지?
	// const matrix = Array.from({ length: rows }).map((_, ri) =>
	// 	Array.from({ length: columns }).map((_, ci) => ri * rows + ci + 1)
	// );

	const matrix = [];
	let count = 1;

	for (let x = 0; x < rows; x++) {
		const row = [];

		for (let y = 0; y < columns; y++) {
			row.push(count++);
		}

		matrix.push(row);
	}

	return queries.map((query) => rotation(matrix, query));
}

function rotation(matrix, [x1, y1, x2, y2]) {
	x1--;
	y1--;
	x2--;
	y2--;

	const temp = matrix[x1][y1];
	let minNum = temp;

	for (let i = x1; i < x2; i++) {
		matrix[i][y1] = matrix[i + 1][y1];
		minNum = Math.min(matrix[i + 1][y1], minNum);
		console.log({ minNum });
	}

	for (let i = y1; i < y2; i++) {
		matrix[x2][i] = matrix[x2][i + 1];
		minNum = Math.min(matrix[x2][i + 1], minNum);
		console.log({ minNum });
	}

	for (let i = x2; i > x1; i--) {
		matrix[i][y2] = matrix[i - 1][y2];
		minNum = Math.min(matrix[i - 1][y2], minNum);
		console.log({ minNum });
	}

	for (let i = y2; i > y1; i--) {
		matrix[x1][i] = matrix[x1][i - 1];
		minNum = Math.min(matrix[x1][i - 1], minNum);
		console.log({ minNum });
	}

	matrix[x1][y1 + 1] = temp;

	return minNum;
}

// console.log(
// 	solution(6, 6, [
// 		[2, 2, 5, 4],
// 		[3, 3, 6, 6],
// 		[5, 1, 6, 3],
// 	])
// ); // [8, 10, 25]

// console.log(
// 	solution(3, 3, [
// 		[1, 1, 2, 2],
// 		[1, 2, 2, 3],
// 		[2, 1, 3, 2],
// 		[2, 2, 3, 3],
// 	])
// ); // [1, 1, 5, 3]

console.log(solution(100, 97, [[1, 1, 100, 97]])); // [1]
