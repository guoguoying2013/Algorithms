/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 */

const inorderTraversal = function(root) {
    const visitNode = (node, container) => {
        if (node !== null) {
            if(node.left !== null) {
                visitNode(node.left, container)
            }
            container.push(node.val);
            if(node.right !== null) {
                visitNode(node.right, container);
            }
        }
    }
    const res = []
    visitNode(root, res);
    return res
//   // container
//   const container = [];
//   // recursive helper func, node
//   const visitNode = (node) => {
//     if (node !== null) {
//       console.log(node);
//         console.log(node.val);
//       if (node.left !== null) {
//         console.log('node.left, ', node.left)
//         visitNode(node.left);
//       }
//       container.push(node.val);
//       if (node.righ !== null) {
//          console.log('node.right, ', node.right)
//         visitNode(node.right);
//       }
//     }

//   } 

//   visitNode(root);
//   return container;
};