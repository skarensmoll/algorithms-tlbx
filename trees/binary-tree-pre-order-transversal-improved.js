function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} roots
 * @return {number[]}
 */
function printPreOrderTreeTrans(treeNode, arr=[]) {
    if(!treeNode) return [];
    if(!treeNode.left && !treeNode.right) {
        arr.push(treeNode.value);
        return arr;
    }

    arr.push(treeNode.value);
    if(treeNode.left) printPreOrderTreeTrans(treeNode.left, arr);
    if(treeNode.right) printPreOrderTreeTrans(treeNode.right, arr);

    return arr;
}


/// []

const root = new TreeNode(10);
const node5 = new TreeNode(5)
const node20 = new TreeNode(20);
const node9 = new TreeNode(9);


node9.left = new TreeNode(4);
node9.right = new TreeNode(15);

node5.left = node9;
node5.right = new TreeNode(18);

node20.left = new TreeNode(3);

root.left = node5;
root.right = node20;

console.log(printPreOrderTreeTrans(root));

