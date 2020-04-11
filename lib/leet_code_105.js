// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
if(preorder.length === 0 && inorder.length === 0) return null;
const rootVal = preorder[0];
const root = new TreeNode(rootVal); // 3 is the root
const midIndex = inorder.indexof(rootVal); // index of 3 is at position 1

const leftSideInOrder = inorder.slice(0,midIndex); // 9
const rightSideInOrder = inorder.slice(midIndex +1); // 20,15,7

const leftSidePreOrder = preorder.filter(val => leftSideInOrder.includes(val)); // 9
const rightSidePreOrder = preorder.filter(val => rigthSideInOrder.includes(val)); // 15,20,7

const leftTree = buildTree(leftSidePreOrder, leftSideInOrder); // buildTree(9,9)
const rightTree = buildTree(rightSidePreOrder, rightSideInOrder); // buildTree([15,20,7],[20,15,7])

root.left = leftTree;
root.right = rightTree;
return root;

}

// preorder = [3,9,20,15,7] root, left, right
// inorder = [9,3,15,20,7]  left, root, right
// Return the following binary tree:

//     3  
//    / \
//   9  20
//     /  \
//    15   7