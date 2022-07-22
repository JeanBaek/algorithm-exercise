// 재귀
const recursion = num => {
	let result = 1;
  for (let i=1; i <= num; i++) {
  	result *= i;
  }
	return result;
};

recursion(3);

// 재귀2

const recursion2 = num => {
	return num > 0 ? num * recursion2(num-1) : 1
};

recursion2(3);