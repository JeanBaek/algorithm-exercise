// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

type Arr = number[];
type Idx = number;

function solution(A: Arr): number {
    // #1: nested for loop (O(N^2))
    // result: https://app.codility.com/demo/results/trainingMET548-YP3/
    // let inversionCount = 0;
    //
    // for (let i = 0; i < A.length; i++) {
    //     for (let j = i + 1; j < A.length; j++) {
    //         if (A[i] > A[j] ?? Number.MAX_SAFE_INTEGER) inversionCount++;
    //
    //         if (inversionCount >= 1e9) return -1;
    //     }
    // }
    //
    // return inversionCount;

    // #2: nested for loop (O(N))
    // result: https://app.codility.com/demo/results/trainingZZB4XX-MYK/
    // const sortedA = A.map((n, i) => [n, i]).sort(([a], [b]) => (a - b));
    // let inversionCount = 0;
    //
    // for (let idx = 0; idx < sortedA.length - 1; idx++) {
    //     if (sortedA[idx][1] > sortedA[idx + 1][1]) (inversionCount += (sortedA[idx][1] - sortedA[idx + 1][1]));
    //     if (inversionCount >= 1e9) return -1;
    // }
    //
    // return inversionCount;

    // #3. async logic
    // result: https://app.codility.com/demo/results/trainingZ4HFBY-PJU/
    // return await Promise.all(A.map((_, i) => getInversionCount(A, i))).then(countList => countList.reduce((a, b) => a + b));

    // #3. async logic 2
    // result: https://app.codility.com/demo/results/trainingEW6M2W-2Z5/
    // return await Promise.all(A.map((_, i) => getInversionCount(A, i))).then(countList => {
    //     const count = countList.reduce((a, b) => a + b, 0);
    //
    //     if (count >= 1e9) throw new Error('Too Heavy');
    //
    //     return count;
    // }).catch(() => -1);

    // #4. merge sort
    // result:
    return mergeSort(A, A.slice(), 0, A.length - 1);
}

function mergeSort(rawArr: Arr, sortedArr: Arr, left: Idx, right: Idx) {
    let inversionCount = 0;

    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        inversionCount += mergeSort(rawArr, sortedArr, left, mid);
        inversionCount += mergeSort(rawArr, sortedArr, mid + 1, right);
        inversionCount += merge(rawArr, sortedArr, left, mid, right);
    }

    return inversionCount;
}

function merge(rawArr: Arr, sortedArr: Arr, left: Idx, mid: Idx, right: Idx) {
    let inversionCount = 0;
    let sortedArrIdx = left;
    let leftSubArrIdx = left;
    let rightSubArrIdx = mid + 1;

    while (leftSubArrIdx <= mid && rightSubArrIdx <= right) {
        if (isInversion(rawArr, leftSubArrIdx, rightSubArrIdx)) {
            sortedArr[sortedArrIdx] = rawArr[rightSubArrIdx];
            inversionCount += (mid + 1 - leftSubArrIdx);
            rightSubArrIdx++;
        }

        sortedArrIdx++;
    }

    // 남아있는 왼쪽 어레이를 sortedArr에 넣어주고
    while (leftSubArrIdx <= mid) {
        sortedArr[sortedArrIdx++] = rawArr[leftSubArrIdx++];
    }

    // 남아있는 오른쪽 어레이를 sortedArr에 넣어준다
    while (rightSubArrIdx <= right) {
        sortedArr[sortedArrIdx++] = rawArr[rightSubArrIdx++];
    }

    // 그리고, 정렬된 애들을 sortedArr에도 그대로 넣어주면 되죠? => 이거 왜하는지 모르겠음
    for (let i = left; i < right + 1; i++) {
        rawArr[i] = sortedArr[i];
    }

    return inversionCount;

    // TODO: https://app.codility.com/demo/results/training22S9GY-V22/ 참고하여 다시 해보기
}

// #3에 사용
// function getInversionCount(arr: Arr, startPoint:Idx): number {
//     let inversionCount = 0;
//
//     for (let i = startPoint + 1; i < arr.length; i++) {
//         if (isInversion(arr, startPoint, i)) inversionCount++;
//     }
//
//     return inversionCount;
// }

function isInversion(arr: Arr, i: Idx, j: Idx) {
    return arr[i] > arr[j];
}

console.log(solution([-1, 6, 3, 4, 7, 4]));
// console.log(solution([0]));
// console.log(solution([1]));
// console.log(solution([1, 2, 3]));
// console.log(solution([1, 1, 1]));

export {};