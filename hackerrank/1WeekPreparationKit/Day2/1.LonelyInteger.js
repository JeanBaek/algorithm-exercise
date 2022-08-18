"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
	// Write your code here
	const numCount = {};

	a.forEach((num) => {
		numCount[`${num}`] = (numCount[num] || 0) + 1;
	});

	for (let [num, count] of Object.entries(numCount)) {
		if (count === 1) return Number(num);
	}
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const a = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((aTemp) => parseInt(aTemp, 10));

	const result = lonelyinteger(a);

	ws.write(result + "\n");

	ws.end();
}
