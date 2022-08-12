// Test Result: https://app.codility.com/demo/results/trainingU5GSAH-ZF2/

function solution(K, A) {
    let count = 0;
    let curRopeLen = 0;

    A.forEach(rope => {
        curRopeLen += rope;

        if (curRopeLen >= K) {
            count++;
            curRopeLen = 0;
        }
    });

    return count;
}