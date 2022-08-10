/** Test Results: 
1. https://app.codility.com/demo/results/trainingGXA2ES-XZ2/
2. https://app.codility.com/demo/results/training6WJB62-8HK/
3. https://app.codility.com/demo/results/trainingXCZTDY-H5V/
4. https://app.codility.com/demo/results/training9SJXC7-436/
**/
// 이건 다시 한 번 풀어봐야 할듯. 온전히 이해되지 않아

// type of arguments is number
function solution(A: number, B: number, K: number) {
  //   let count = 0;

  //   let i = A % K === 0 ? A : A + (K - (A % K));

  //   while (i <= B) {
  //     count++;
  //     i += K;
  //   }

  //   return count;

  const diff = Math.floor(B / K - A / K);

  return !(A % K) || !(B % K) ? diff + 1 : diff;
}

console.log(solution(6, 11, 2));
console.log(solution(7, 12, 2));
// console.log(solution(10, 10, 5));
// console.log(solution(10, 10, 7));
// console.log(solution(10, 10, 20));
// console.log(solution(12, 20, 6));
// console.log(solution(11, 345, 17));

export {};
