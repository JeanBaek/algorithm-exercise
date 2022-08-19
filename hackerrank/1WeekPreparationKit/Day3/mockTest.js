// 으아 이거 어렵다
// palidrome은 좀 더 공부해야할 듯!

// return remove index to make palidrome
//  or -1
function palindromeIndex(s) {
	const len = s.length;
	let start = 0;
	let end = len - 1;

	if (len === 1) return -1;

	// palidrome 안되는 위치 탐색
	while (start < end) {
		if (s.charAt(start) !== s.charAt(end)) break;

		start++;
		end--;
	}

	if (start >= end) return -1;

	let i = start;
	let j = end;

	while (i < j) {
		if (s.charAt(i) !== s.charAt(j)) {
			return j;
		}

		i++;
		j--;
	}

	return i;
}

// console.log(palindromeIndex("aaab"));
// console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
