function processData([len, ...input]) {
    //Enter your code here
    const stack1 = [];
    const stack2 = [];
    
    input.forEach(query => {
		// console.log({stack1, stack2, query})
        const [code, number] = query.split(' ');
        
        if (code === '1') {
            // 안 비어있는 곳에
            if (getFulfilledStackCode() === 1) stack1.push(+number);
            else stack2.push(+number);
        } else if (code === '2') {
            // stack1의 length -2 만큼 stack2에 옮기고 stack1 마지막 pop();
            // stack1이 비어있다면 반대로
            let popStack;
            let pushStack;
            
            if (getFulfilledStackCode() === 1) {
                popStack = stack1;
                pushStack = stack2;
            } else {
                popStack = stack2;
                pushStack = stack1;
            }
                        
			const popCount = popStack.length - 1
            for (let i = 0; i < popCount; i++) {
                pushStack.push(popStack.pop());
            }
            
            popStack.pop();
        } else if (code === '3') {
            // stack1의 length -2 만큼 stack2에 옮기고 stack1 마지막 pop();
            // stack1이 비어있다면 반대로
            if (getFulfilledStackCode() === 1) {
                console.log(stack1[0]);
            } else {
                console.log(stack2[stack2.length - 1]);
            }
        }
    })    
    
    function getFulfilledStackCode() {
        if (stack1.length && !stack2.length) return 1;
        else if (!stack1.length && stack2.length) return 2;
        else return 1; // when two stacks are empty
    }
} 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
_input = `100
1 92118642
2
1 107858633
1 110186788
1 883309178
1 430939631
2
1 739711408
1 803703507
1 643797161
1 538560826
3
1 595864615
1 490282285
1 558095366
1 893666727
1 595679828
3
1 99908215
3
1 333969117
1 604624143
1 88712599
1 224459820
3
1 153072902
3
3
2
1 156974087
2
1 387224973
1 154628865
1 256130200
1 704295204
2
3
1 928499989
2
3
2
1 319507446
1 323714081
1 772087837
1 350417458
1 193303587
1 213700781
3
1 565379092
1 284925173
2
1 794176274
3
1 766929345
3
2
1 42983700
2
1 156768862
1 205008057
1 93223219
3
2
1 17818922
1 917626659
1 829031126
1 346173907
1 78065001
2
3
2
3
1 565004472
1 753139390
2
1 629441479
1 935933973
1 650043630
3
1 158726470
1 206429620
3
1 590439448
1 139555053
1 78707344
1 989497950
1 880166047
2
1 137608768
3
1 861823671
1 625166323
1 431218849
3
1 570007363
2
3
3
2
1 978253366`;
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
   processData(_input.split('\n'));
// });