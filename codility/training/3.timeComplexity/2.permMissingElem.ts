/** Test results: 
1. https://app.codility.com/demo/results/training4JSXA6-XNT/
2. https://app.codility.com/demo/results/trainingKPGJWV-AKX/
3. https://app.codility.com/demo/results/trainingSBDJ86-R3C/
4. https://app.codility.com/demo/results/trainingDRMRJ8-BS6/
**/

function solution(A: number[]) {
  let missingElement = 1;

  A.sort((a, b) => a - b).some((n, i, arr) => {
    if (n !== i + 1) {
      // first element is missing
      missingElement = i + 1;

      return true;
    } else if (n + 1 !== arr[i + 1]) {
      // found missing one!
      missingElement = n + 1;

      return true;
    }

    return false;
  });

  return missingElement;
}

console.log(solution(Array.from({ length: 100000 }).map((_, i) => i + 1)));

export {};
