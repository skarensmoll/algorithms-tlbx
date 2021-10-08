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
 */
<<<<<<< HEAD
 var isBalanced = function(root) {
  if(!root) return true;

  const [height, isBalanced] = checkImbalanced(root);
  return isBalanced;
=======
var isBalanced = function(root) {
    if(!root) return true;
    
    const [height, isBalanced] = checkImbalanced(root);
    return isBalanced;
>>>>>>> 804ef79ffc3b7067e0044180d99db5ba1f13e10a
};


function checkImbalanced(node) {
<<<<<<< HEAD
  if(!node) return [0, true];

  const [leftH, leftB] = checkImbalanced(node.left);
  const [rightH, rightB] = checkImbalanced(node.right);

  const isBalanced = (Math.abs(leftH - rightH) <=1);
  const maxHeight = Math.max(leftH, rightH);
  const newHeight =  1 + maxHeight;

  return [newHeight, (leftB & rightB & isBalanced)]
}
=======
    if(!node) return [0, true];
    
    const [leftH, leftB] = checkImbalanced(node.left);
    const [rightH, rightB] = checkImbalanced(node.right);
    
    const isBalanced = (Math.abs(leftH - rightH) <=1);
    const maxHeight = Math.max(leftH, rightH);
    const newHeight =  1 + maxHeight;
    
    return [newHeight, (leftB & rightB & isBalanced)]
}
>>>>>>> 804ef79ffc3b7067e0044180d99db5ba1f13e10a
