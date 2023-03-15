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

function isNullish(value) {
    return value === null || value === undefined;
}

function isSameSubTree(p, q) {
    if (!p && !q) return true;
    if (isNullish(p) && !isNullish(q) || !isNullish(p) && isNullish(q)) return false;
    if (p.val !== q.val) return false;

    return isSameSubTree(p?.left, q?.left) && isSameSubTree(p?.right, q?.right);
}

const isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (isNullish(p) && !isNullish(q) || !isNullish(p) && isNullish(q)) return false;
    if (p.val !== q.val) return false;

    return isSameSubTree(p?.left, q?.left) && isSameSubTree(p?.right, q?.right)
};