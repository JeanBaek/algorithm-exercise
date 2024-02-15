const addUpto = (n) => {
  // return new Array(n).fill(1).reduce((a = 0, b, currentIndex) => a + b + currentIndex);
  return n * (n + 1) / 2;
};

// const start = performance.now();
console.time();
console.log(addUpto(10000));
console.timeEnd()

// NOTE: This method can be inaccuracy affected by spec or mood of a computer.

/**** 
 Big O Notation: 입력값의 크기와 입력값에 따라 변하는 시간의 관계를 나타낸 것 
 [linear, quadratic, constant, etc]

 * O(xn2 + 5n) 같은 경우에서 5n은 (제곱에 비해 현저히 작은 숫자라서) 무시한다. 
 * accessing element in an array by index or object by key is constant
 
 이야기 나누고 싶은 거
 * O(n^2 + n^3) 이 단지 O(n^3)이라기엔 n^2가 무시할 수 없다 생각됌
 ****/


