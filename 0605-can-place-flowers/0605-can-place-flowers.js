/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function (flowerbed, n) {
    const newFlowerbed = flowerbed.slice();
    let leftN = n;

    for (let i = 0; i < newFlowerbed.length; i++) {
        if (leftN === 0) return true;

        const prev = newFlowerbed[i - 1] ?? 0;
        const curr = newFlowerbed[i];
        const next = newFlowerbed[i + 1] ?? 0;

        if (!prev && !curr && !next) {
            newFlowerbed[i] = 1;
            leftN--;
        }
    }

    return leftN === 0;
};