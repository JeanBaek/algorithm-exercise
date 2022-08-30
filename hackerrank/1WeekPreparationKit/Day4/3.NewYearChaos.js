const fs = require("fs");
const input = fs
	.readFileSync("./3.NewYearChaos.input.txt")
	.toString()
	.trim()
	.split("\n");

function minimumBribes(q) {
	// print 'order' earlier than its index + 1
	// or print 'order' 2+ ealier than its index + 1
	let bribeCount = 0;
	let leftPosition = new Set(q);

	const isTooChaotic = q.some((order, index) => {
		// if here's a too much bribed one, return true
		/** 
        e.g [2, 5, 1, 3, 4] 
        when index is 1 => there can be till 4
        if the 'order' is more than 4 
        **/
		if (order - 2 > index + 1) return true;
		if (order > index + 1) bribeCount += order - index - 1;
		else if (order > Math.min(...leftPosition)) bribeCount += 1;

		leftPosition.delete(order);

		return false;
	});

	console.log(isTooChaotic ? "Too chaotic" : bribeCount);
}

function main([caseCount, ...data]) {
	const qList = [];

	for (let i = 0; i < +caseCount; i++) {
		qList.push(data[i * 2 + 1].split(" "));
	}

	qList.forEach(minimumBribes);
}

main(input);

// minimumBribes([2, 1, 5, 3, 4]);
// minimumBribes([2, 5, 1, 3, 4]);
