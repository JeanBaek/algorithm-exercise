"use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const numSet = { 1: 0, "-1": 0, 0: 0 };
  const n = arr.length;

  arr.forEach((num) => {
    if (num > 0) numSet["1"]++;
    else if (num < 0) numSet["-1"]++;
    else numSet["0"]++;
  });

  function sixDecimalNum(nume, deno) {
    return Number.parseFloat(nume / deno).toFixed(6);
  }

  // order: positive, negative, zero values
  return [
    sixDecimalNum(numSet["1"], n),
    sixDecimalNum(numSet["-1"], n),
    sixDecimalNum(numSet["0"], n),
  ].join("\n");
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  console.log(plusMinus(arr));
}
