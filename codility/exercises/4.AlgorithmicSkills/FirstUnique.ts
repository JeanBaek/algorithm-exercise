// result: https://app.codility.com/demo/results/trainingBA6G67-X7V/

function solution(A: number[]): number {
    // 1. 유니크한지 찾아냄 => key: integer, value: { count, index }
    // 2. value count 1인것만 솎아냄 // set.has로 미리 판별할 수 있지만, 그럼 container가 하나 더 필요할 듯 하여 더 복잡해지고 효율성도 큰 변화 없을 듯
    // 3. index 정렬하여 가장 낮은 숫자 1개 리턴

    const integerMap: Map<number, { count: number, index: number }> = A.reduce((map, int, index) => map.set(int, {
        count: map.has(int) ? Number.MAX_SAFE_INTEGER : 1,
        index
    }), new Map());

    const uniqueIntList = [...integerMap]
        .filter(([_, {count}]) => count === 1);

    if (!uniqueIntList.length) return -1;

    return uniqueIntList.sort((a, b) => a[1].index - b[1].index)
        [0]
        [0]
}

console.log(solution([4, 10, 5, 4, 2, 10]))

export {}