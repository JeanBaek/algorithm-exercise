const lengthOfLongestSubstring = function (s) {
  if (s === "") return 0;

  let left = 0;
  let right = 0;
  let longest = 1;
  let charCount = new Set();

  while (right < s.length) {
    if (!charCount.has(s[right])) {
      charCount.add(s[right], true);
      right++;
    } else {
      charCount.delete(s[left]);
      left++;
    }

    longest = Math.max(longest, right - left);
  }

  return longest;
};
//                                    01234567
// console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("bbbbbb"));
