// TODO: retry to resolve runtime error and time optimization

// first try. Need time optimization
function solution(queue1, queue2) {
    let sum1 = sum(queue1);
    let sum2 = sum(queue2);
    const midValue = (sum1 + sum2) / 2;
    
    const MAX_COUNT = queue1.length * 3;
    let count = 0;
    
    // if sum is odd, return -1;
    if ((sum1 + sum2) % 2 === 1) return -1;
    // if it cannot make exact half, return -1;
    // but how to calculate...?
    // at least check if the maxNum is more than half
    if (Math.max(...[queue1, queue2].flat()) > midValue) return -1;
    
    while(count < MAX_COUNT) {
        if (sum1 < sum2) moveAndCal('TO_Q1')
        else if (sum1 > sum2) moveAndCal('TO_Q2')
        else return count;
        
        count++;
    }
    
    // code : 'TO_Q1' || 'TO_Q2'
    function moveAndCal(code) {
        if (code === 'TO_Q1') {
            const moveNum = queue2.shift();
            
            queue1.push(moveNum);
            sum1 += moveNum;
            sum2 -= moveNum;
        } else if (code === 'TO_Q2') {
            const moveNum = queue1.shift();
            
            queue2.push(moveNum);
            sum1 -= moveNum;
            sum2 += moveNum;
        }
    }
    
    
    function sum(nums) {
        return nums.reduce((a, b) => a + b);
    }
    
    return -1;
}

// second try. Need handling runtime error
function solution(queue1, queue2) {
    const mergedQueue = [...queue1, ...queue2];
    const sumValue = sum(mergedQueue);
    const midValue = sumValue / 2;
    const maxCount = mergedQueue.length * 4; // why 4?
    
    let start = 0;
    let end = queue1.length;
    let sumCurrHalf = sum(mergedQueue.slice(start, end))
    let count = 0;
    
    // if sum is odd, return -1;
    if (sumValue % 2 === 1) return -1;
    // at least check if the maxNum is more than half
    if (Math.max(...mergedQueue) > midValue) return -1;
    
    while(count <= maxCount) {
        if (midValue < sumCurrHalf) {
            sumCurrHalf -= mergedQueue[start];
            start++;
        } else if (midValue > sumCurrHalf) {
            sumCurrHalf += mergedQueue[end];
            end++;
        } else if (midValue === sumCurrHalf) return count;
        
        count++;
    }
    
    function sum(nums) {
        return nums.reduce((a, b) => a + b);
    }
    
    return -1;
}

console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
