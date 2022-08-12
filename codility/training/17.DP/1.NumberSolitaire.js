// Test Result: https://app.codility.com/demo/results/trainingG9NKJK-BYK/

// 재풀이 예정. 문제 정확히 이해되지 않음.

function solution(A) {
    let currentSum = 0;

    A.reduce((currentMax, n) => {
        currentSum = currentMax + n;
        
        return Math.max(currentMax, currentSum);
    })

    return currentSum;
}