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
        // 둘다 X
        if (!map.has(a) && !map.has(b)) {
            map.set(a, new Map([[b, dist]]));
            map.set(b, new Map([[a, dist]]));
        }
        // O a, X b
        else if (!map.has(b)) {
            const aMap = map.get(a);
            aMap.set(b, dist);

            map.set(b, new Map([[a, dist]]));
        }

        // X a, O b
        else if (!map.has(a)) {
            const bMap = map.get(b);
            bMap.set(a, dist);

            map.set(a, new Map([[b, dist]]));
        }

        // O a, O b
        else {
            const aMap = map.get(a);
            const bMap = map.get(b);

            aMap.set(b, dist);
            bMap.set(a, dist);
        }

        return map;
    }, new Map())

    // 2. update 최소경로 by searching 1부터 n까지의 경로
    let minimumDist = Number.MAX_SAFE_INTEGER;
    const nextVisitQueue = [1];
    const visited = new Set();

    while (nextVisitQueue.length) {
        const nextVisit = nextVisitQueue.shift()
        const subMap = tree.get(nextVisit);

        if (!subMap) continue;
        for (let [key, value] of subMap.entries()) {
            if (visited.has(`${nextVisit} ${key}`) || visited.has(`${key} ${nextVisit}`)) continue;

            visited.add(`${nextVisit} ${key}`);
            nextVisitQueue.push(key)
            minimumDist = Math.min(minimumDist, value);
        }

    }

    // 3. return 최소경로
    return minimumDist;
};