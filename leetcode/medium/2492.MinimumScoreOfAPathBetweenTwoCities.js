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

    // 2. update 최소경로 by searching 1부터 n까지의 경로
    const nextNodes = [1];
    const visited = new Set();
    let minimumDist = Number.MAX_SAFE_INTEGER;

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

// console.log(minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]));
// console.log(minScore(4, [[1, 2, 2], [1, 3, 4], [3, 4, 7]]));
// console.log(minScore(36, [[7, 11, 418], [13, 23, 287], [16, 25, 7891], [15, 7, 9695], [4, 3, 9569], [17, 7, 1809], [14, 3, 4720], [14, 4, 6118], [9, 2, 4290], [32, 17, 5645], [14, 16, 426], [36, 7, 6721], [13, 30, 9444], [3, 25, 4635], [33, 5, 1669], [22, 18, 8910], [5, 28, 7865], [13, 10, 9466], [7, 9, 2457], [11, 8, 4711], [17, 11, 6308], [7, 34, 3789], [8, 33, 9659], [16, 3, 4187], [16, 20, 3595], [23, 10, 6251], [26, 22, 6180], [4, 16, 5577], [26, 7, 5398], [6, 36, 8671], [10, 19, 3028], [23, 30, 1330], [19, 13, 8315], [25, 20, 4740], [25, 4, 5818], [30, 10, 8030], [30, 19, 7527], [28, 6, 6804], [21, 27, 1746], [18, 9, 5189], [7, 27, 6560], [20, 14, 2450], [27, 32, 3951], [2, 21, 3927], [1, 15, 9283], [3, 20, 5428], [15, 26, 5871], [19, 23, 4533], [14, 25, 6992], [4, 20, 5831]]));
console.log(minScore(7, [[1, 3, 1484], [3, 2, 3876], [2, 4, 6823], [6, 7, 579], [5, 6, 4436], [4, 5, 8830]])); // 579
// 1 => 3

