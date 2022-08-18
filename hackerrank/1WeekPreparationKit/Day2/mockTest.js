// Result (Click "View Report"): https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-two/challenges

function flippingMatrix(matrix) {
	/** 행렬을 바꿔서 될 수 있는 값. 사분면 선을 거울처럼 대치하고 있다. 
    r\c[0][1][2][3]
    [0] a  b  b  a
    [1] c  d  d  c 
    [3] c  d  d  c
    [4] a  b  b  a

    maxResult = a 중 가장 큰 값
                + b 중 가장 큰 값
                + c 중 가장 큰 값
                + d 중 가장 큰 값

    따라서 전체의 1/4만 탐색하면 maxResult 값을 구할 수 있다. 
    **/

	const len = matrix.length;
	const halfLen = len / 2;
	let maxResult = 0;

	let max = 0;
	for (let row = 0; row < halfLen; row++) {
		for (let col = 0; col < halfLen; col++) {
			max = 0; // 초기화. 요소는 최소 0부터 시작하기 떄문에 0으로 초기화해도 적합하다.

			max = Math.max(max, matrix[row][col]);
			max = Math.max(max, matrix[len - 1 - row][col]);
			max = Math.max(max, matrix[row][len - 1 - col]);
			max = Math.max(max, matrix[len - 1 - row][len - 1 - col]);

			maxResult += max;
		}
	}

	return maxResult;
}

const input = [
	[1, 2],
	[3, 4],
];
console.log(flippingMatrix(input));
