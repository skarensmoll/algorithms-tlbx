function TreeNode(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
}

function printTreePostOrderTransversal(node, arr = []) { 
    if(!node) return [];
    if(!node.left && !node.right) { //leaf
        return arr.push(node.value);
    }

    if(node.left) printTreePostOrderTransversal(node.left, arr)
    if(node.right) printTreePostOrderTransversal(node.right, arr)

    arr.push(node.value);

    return arr; 
}


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

console.log(printTreePostOrderTransversal(root));
