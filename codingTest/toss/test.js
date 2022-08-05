function solution(codeOwnersMap, directory) {
  return directory.split("/").reduce((p, dir) => (p = p[dir]), codeOwnersMap);
}

const input3 = [
  {
    scripts: ["배수진"],
    services: {
      "business-ledger": ["고찬균", "배수진"],
      "toss-card": ["채주민", "유재섭"],
      subsidy: ["유재섭"],
      payments: ["유재섭"],
      other: { test: ["유재섭"] },
    },
    libraries: { "yarn-workspaces-plugin-since": ["유재섭"], tds: ["유재섭"] },
  },
  "services/other/test",
];

console.log(solution(...input3));
