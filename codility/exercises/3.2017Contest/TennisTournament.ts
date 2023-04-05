// result: https://app.codility.com/demo/results/trainingCG5BKM-7EN/

function solution(P: number, C: number): number {
    return Math.min(Math.floor(P / 2), C)
}


console.log(solution(5, 3))
console.log(solution(10, 3))

export {}