function TreeNode(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
}

function printPreOrderTreeTrans(node) {
    if(node === null) return [];
    if(node.left === null && node.right === null) { // leafs
        return [node.value]
    } 

    const left = node.left === null ? [] : printPreOrderTreeTrans(node.left);
    const right = node.right === null ? [] : printPreOrderTreeTrans(node.right);

    return [node.value, ...left, ...right];
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

