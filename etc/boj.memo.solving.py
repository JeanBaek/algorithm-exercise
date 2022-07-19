# const fs = require("fs");
# const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
# const [count, ...nums]: string[] = fs
#   .readFileSync(filePath)
#   .toString()
#   .trim()
#   .split("\n");

# console.log(nums.sort((a, b) => +a - +b).join("\n"));

import sys;
count = int(sys.stdin.readline())
nums = [0] * 10001

for _ in range(count):
  nums[int(sys.stdin.readline())] += 1

for i in range(10001):
  if nums[i] != 0:
    for j in range(nums[i]):
      print(i)

