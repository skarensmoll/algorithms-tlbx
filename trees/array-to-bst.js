/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return new BST(nums);
};


function BST(array) {
    this.array = array;
    this.size = array.length - 1;

    this.toBST = (start, end) => {
        if(!this.array) return;
        if(start > end) return null;

        const nodeIndex = Math.ceil((start + end) / 2);
        const node = new TreeNode(this.array[nodeIndex]);

        const leftNode = this.toBST(start, nodeIndex - 1);
        const rightNode = this.toBST(nodeIndex + 1, end);

        node.left = leftNode;
        node.right = rightNode;

        return node;
    }


    return this.toBST(0, this.size);
}
