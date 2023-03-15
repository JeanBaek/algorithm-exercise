/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const inputParamP = {
    // val: 1,
    // left: {
    //     val: 2,
    // }

}

const inputParamQ = {
    // val: 1,
    // right: {
    //     val: 2,
    // }
    val: 0
}

function isNullish(value) {
    return value === null || value === undefined;
}

const isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (isNullish(p) && !isNullish(q) || !isNullish(p) && isNullish(q)) return false;
    if (isNullish(p?.val) && !isNullish(q?.val) || !isNullish(p?.val) && isNullish(q?.val)) return false;
    if (p.val !== q.val) return false;
    // if (isSameSubTree(p, q)) return true;

    return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)
};

console.log(isSameTree(inputParamP, inputParamQ))