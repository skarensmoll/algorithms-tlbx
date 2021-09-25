
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const root = new TreeNode(20);
const node10 = new TreeNode(10);
const node30 = new TreeNode(30);
const node5 = new TreeNode(5);
const node15 = new TreeNode(15);
const node25 = new TreeNode(25);
const node35 = new TreeNode(35);
const node3 = new TreeNode(3);
const node7 = new TreeNode(7);
const node14 = new TreeNode(14);
const node16 = new TreeNode(16);
const node24 = new TreeNode(24);

root.left = node10;
root.right = node30;

node10.left = node5;
node10.right = node15;

node5.left = node3;
node5.right = node7;

node15.left = node14;
node15.right = node16;

node30.left = node25;
node25.left = node24;
node30.right = node35;


function findSuccessor(root, lookUp) {
    this.lookUp = lookUp;
    this.successor = null;

    const checkBST = (node, prev = null) => {
        if(this.successor !== null) return;
        if(node == null) return node;

        const left =  checkBST(node.left, node.val); //lowestElement on the left
        const right = checkBST(node.right, prev); //lowestElement on the right

        if(node.val === lookUp) {
            if(node.right !== null) this.successor = right;
            else this.successor = prev;
        }

        return left === null ? node.val : left;
    }

    checkBST(root)
    console.log(this.successor);
}

findSuccessor(root, 25);
