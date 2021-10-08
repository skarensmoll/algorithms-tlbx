function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const tree = new TreeNode(6);
const node4 = new TreeNode(4);
const node8 = new TreeNode(8);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node7 = new TreeNode(7);
const node10 = new TreeNode(10);


tree.left = node4;
tree.right = node8;
node4.left = node3;
node4.right= node5;

node8.left = node5;
node8.right = node10;

function isValidBST(node) {

  if(node == null) return true;
  if(node.val == null) return false;


  const checkBST = (node, min = null, max= null) => {
    if(node == null) return true;

    if((max !== null && node.val >= max) || (min !== null && node.val <= min)) {
      return false;
    }

    const left = checkBST(node.left, min, node.val);
    const right = checkBST(node.right, node.val, max);
    return left && right;
  }

  return checkBST(node);
}

console.log(isValidBST(tree));