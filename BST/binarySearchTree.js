/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
@param {TreeNode} root
@return {boolean}
*/

const isValidBST = function(root) {
  if (!root) {
    return true; // Sanity check for edge case, when given is null?
  }
  // compare if root.val falls in range
  function helper(root, min, max) {
    if (!root) {
      return true; // base case: We hit the end of the path
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false; // current node's val doesn't satisfy the BST rules
    }
    
    // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  }
  
  return helper(root, null, null);
};