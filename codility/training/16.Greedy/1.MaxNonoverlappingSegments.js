/** Test Results: 
1. https://app.codility.com/demo/results/trainingGTBNZ5-9TR/
2. https://app.codility.com/demo/results/trainingSYFAJE-5M2/
3. https://app.codility.com/demo/results/trainingKFYSQU-9NX/
4. https://app.codility.com/demo/results/trainingCB3QYG-T22/
**/

function solution(A, B) {
  const len = A.length;
  let segCount = 1;
  let prevEnd = B[0];

  if (len < 1) return 0;

  for (let i = 1; i < len; i++) {
    if (A[i] > prevEnd) {
      segCount++;
      prevEnd = B[i];
    }
  }

  return segCount;
}
