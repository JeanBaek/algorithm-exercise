/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

const minScore = function (n, roads) {
    // 1. make tree
    // 2. 최소경로를 update by searching 1부터 n까지의 경로
    // 3. return 최소경로

    // 1. make tree
    const tree = roads.reduce((map, [a, b, dist], idx) => {
        if (map.has(a)) map.get(a).set(b, dist);
        else map.set(a, new Map([[b, dist]]));

        if (map.has(b)) map.get(b).set(a, dist);
        else map.set(b, new Map([[a, dist]]));

        return map;
    }, new Map())

    console.log({tree})

    // 2. update 최소경로 by searching 1부터 n까지의 경로
    let minimumDist = Number.MAX_SAFE_INTEGER;
    const nextNodes = [1];
    const visited = new Set();

    while (nextNodes.length) {
        const node = nextNodes.shift()
        const subMap = tree.get(node);

        if (!subMap) continue;
        for (let [subK, subV] of subMap.entries()) {
            if (visited.has(`${node} ${subK}`) || visited.has(`${subK} ${node}`)) continue;

            visited.add(`${node} ${subK}`);
            minimumDist = Math.min(minimumDist, subV);
            nextNodes.push(subK)
        }

    }

    // 3. return 최소경로
    return minimumDist;
};