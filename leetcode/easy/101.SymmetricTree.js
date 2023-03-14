/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */

const rootValue = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4,
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 3,
        }
    }
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function isSubSymmetric(left, right) {
    if (left === null && right === null) return true;
    if (left?.val !== right?.val) return false;

    return isSubSymmetric(left?.left ?? null, right?.right ?? null) && isSubSymmetric(left?.right ?? null, right?.left ?? null);
}

const isSymmetric = function (root) {
    if (!root) return true;

    return isSubSymmetric(root.left, root.right);
};


console.log(isSymmetric(rootValue))