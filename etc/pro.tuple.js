// 프로그래머스 [튜플]
const solution = (s) => {
  const countHash = {};

  s.slice(2, -2)
    .split("},{")
    .forEach((numSet) => {
      numSet
        .split(",")
        .forEach((num) => (countHash[num] = (countHash[num] || 0) + 1));
    });

  return Object.keys(countHash)
    .sort((keyA, keyB) => countHash[keyB] - countHash[keyA])
    .map(Number);
};

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
