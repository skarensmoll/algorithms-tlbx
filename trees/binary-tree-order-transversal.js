function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function printTreeOrderTransversal(treeNode) {
    if(treeNode === null) return [];
    if(treeNode.left === null && treeNode.right === treeNode) // leaf
        return [treeNode.value];

    const leftNode = treeNode.left === null ? [] : printTreeOrderTransversal(treeNode.left);
    const rightNode = treeNode.right === null ? [] : printTreeOrderTransversal(treeNode.right);
   
    return [...leftNode, treeNode.value, ...rightNode];
}


//// Test Scenario 1
const node5 = new TreeNode(5);
node5.left = new TreeNode(9);
node5.right = new TreeNode(18);

const node20 = new TreeNode(20);
node20.left = new TreeNode(3);
node20.right = new TreeNode(7);

const root = new TreeNode(10)
root.left = node5;
root.right = node20;

const node2 = new TreeNode(2);
node2.left = new TreeNode(3);

//// Test Scenario 2
const root2 = new TreeNode(1);
root2.right = node2;


console.log(printTreeOrderTransversal(root1));
console.log(printTreeOrderTransversal(root2));
