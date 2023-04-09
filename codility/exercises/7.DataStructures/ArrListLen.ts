// result: https://app.codility.com/demo/results/trainingNAK4UU-VWQ/

function solution(A: number[]): number {
    let index = 0;
    let nodeValue = A[index];
    let count = 0;

    while (index !== -1) {
        index = nodeValue = A[index];
        count++;
    }

    return count;
}

console.log(solution([1, 4, -1, 3, 2]));

export {}