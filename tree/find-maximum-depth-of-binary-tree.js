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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0
    function getLen(node, currentL) {
        if (node === null) {
            if (currentL > max) {
                max = currentL;
            }
            return;
        } else {
            currentL ++;
            getLen(node.left, currentL);
            getLen(node.right, currentL)
        }
    }
    getLen(root, 0);
    return max;
  };