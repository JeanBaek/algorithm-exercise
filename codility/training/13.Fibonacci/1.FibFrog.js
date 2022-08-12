// Test Result: https://app.codility.com/demo/results/trainingWTJJ64-MBC/

function solution(A, B) {
    const L = A.length;
    const max = Math.pow(2, 30);

    const fib = [0, 1, 2];

    for(let i = 3; i < L+1; i++) { // L까지 피보나치 수열 구해놓기
        fib[i] = (fib[i-1] + fib[i-2]) % max;
    }

    const result = [];

    for(let i = 0; i < L; i++) { // 2^B[i]의 수로 나누기
        result[i] = fib[A[i]] % Math.pow(2, B[i]);    
    }

    return result;
}