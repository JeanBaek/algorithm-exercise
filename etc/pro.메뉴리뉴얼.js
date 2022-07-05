// 프로그래머스 [메뉴 리뉴얼]
const combination = (menu, order, count, index, prev) => {
  if (prev.length === count) {
    let curStr = prev.sort().join("");

    if (menu.has(curStr)) menu.set(curStr, menu.get(curStr) + 1);
    else menu.set(curStr, 1);
  }

  for (let i = index; i < order.length; i++) {
    combination(menu, order, count, i + 1, [...prev, order[i]]);
  }
};

const solution = (orders, course) => {
  let menu = new Map();

  orders.forEach((order) => {
    course.forEach((count) => combination(menu, order, count, 0, []));
  });

  const menuMoreThanTwo = [...menu.entries()].filter((e) => e[1] !== 1);

  let result = [];

  course.forEach((count) => {
    let max = 0;
    let temp = menuMoreThanTwo.filter(([menu, num]) => {
      if (max < num && menu.length === count) max = num;

      return menu.length === count;
    });

    temp.filter((x) => x[1] === max).forEach((x) => result.push(x[0]));
  });

  return result.sort();
};

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
