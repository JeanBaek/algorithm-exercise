function parse(route, path) {
  const falseResult = { matches: false };
  const trueResult = { matches: true, params: {} };

  const routeArr = route.split("/");
  const pathArr = path.split("/");

  if (routeArr.length !== pathArr.length) return falseResult;

  for (let i = 1; i < routeArr.length; i += 2) {
    // page 이름 안 맞으면 끝
    if (routeArr[i] !== pathArr[i]) return falseResult;

    if (routeArr[i + 1] && pathArr[i + 1]) {
      const key = routeArr[i + 1].replace(/[^A-Za-z]/g, "");
      const value = pathArr[i + 1];

      trueResult.params[key] = String(value);
    } else if (routeArr[i + 1] === undefined && pathArr[i + 1] === undefined) {
      continue;
    } else return falseResult;
  }

  return trueResult;
}

function solution(route, path) {
  var result = parse(route, path);
  return JSON.stringify(result);
}

const input = [
  "/service/[serviceId]/deployment/[deploymentId]",
  "/service/1/deployment/9",
];

// console.log(parse(...input));
// console.log(parse("/about", "/"));
console.log(parse("/about", "/about"));
