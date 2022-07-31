// twoSum함수에 숫자배열과 '특정 수'를 인자로 넘기면,
// 더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

const twoSum = (arr, totalNum) => {
	for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === totalNum) return [i, j];
        }
    }
}

twoSum([5, 2, 17, 24], 29);