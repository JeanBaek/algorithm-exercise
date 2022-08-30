// 1 of 15 test cases did not pass due to timeout,,

function processData([len, ...input]) {
	//Enter your code here
	const stack1 = [];
	const stack2 = [];

	input.forEach((query) => {
		console.log({ stack1, stack2, query });
		const [code, number] = query.split(" ");

		if (code === "1") {
			if (getFulfilledStackCode() === 2) {
				// stack2면 모두 stack1으로 옮긴 후에 끝에 push 해야 함

				while (stack2.length) stack1.push(stack2.pop());
			}

			stack1.push(+number);
		} else if (code === "2") {
			// stack1의 length -2 만큼 stack2에 옮기고 stack1 마지막 pop();
			// stack1이 비어있다면 반대로

			if (getFulfilledStackCode() === 1) {
				while (stack1.length > 1) stack2.push(stack1.pop());

				stack1.pop();
			} else {
				stack2.pop();

				while (stack1.length) stack2.push(stack1.pop());
			}
		} else if (code === "3") {
			// stack1의 length -2 만큼 stack2에 옮기고 stack1 마지막 pop();
			// stack1이 비어있다면 반대로
			if (getFulfilledStackCode() === 1) {
				console.log(stack1[0]);
			} else {
				console.log(stack2[stack2.length - 1]);
			}
		}
	});

	function getFulfilledStackCode() {
		if (stack1.length && !stack2.length) return 1;
		else if (!stack1.length && stack2.length) return 2;
		else return 1; // when two stacks are empty
	}
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
_input = `100
1 1
2
1 2
1 3
1 4
1 5
2
1 6
1 7
1 8
1 9
3
1 10
1 11
1 12
1 13
1 14
3
1 15
3
1 16
1 17
1 18
1 19
3
1 20
3
3
2
1 21
2
1 22
1 23
1 24
1 25
2
3
1 26
2
3
2
1 27
1 28
1 29
1 30
1 31
1 32
3
1 33
1 34
2
1 35
3`;
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
processData(_input.split("\n"));
// });
