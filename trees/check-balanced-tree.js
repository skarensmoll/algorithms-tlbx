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
var isBalanced = function(root) {
    if(!root) return true;
    
    const [height, isBalanced] = checkImbalanced(root);
    return isBalanced;
};


function checkImbalanced(node) {
    if(!node) return [0, true];
    
    const [leftH, leftB] = checkImbalanced(node.left);
    const [rightH, rightB] = checkImbalanced(node.right);
    
    const isBalanced = (Math.abs(leftH - rightH) <=1);
    const maxHeight = Math.max(leftH, rightH);
    const newHeight =  1 + maxHeight;
    
    return [newHeight, (leftB & rightB & isBalanced)]
}
