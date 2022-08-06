function solution(paths) {
  const result = [];

  paths.forEach((p) => {
    p.split("/").forEach((el) => {
      if (el === ".") {
        result.pop();
      } else if (el === "..") {
        result.pop();
        result.pop();
      } else if (el === "...") {
        result.pop();
        result.pop();
        result.pop();
      } else {
        result.push(el.replace(/[\/]/g, ""));
      }
    });
  });

  return `/${result.join("/")}`;
}

console.log(solution(["/foo", "bar", "baz/asdf"]));

console.log(solution(["/foo", "bar", "baz", "...", "/asdf"]));

console.log(solution(["/foo", "bar", "baz/./asdf"]));
