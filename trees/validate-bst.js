
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let valid = true;

function inOrderTraversal(node, prev) {
    if(node != null) {
        
        inOrderTraversal(node.left, prev, valid);
        
        if(node.left) {
            const result = node.left.val < node.val;
            if(!result) valid = false;
            
        }
        console.log('node.val', node.val)
        if(prev) {
            const result = prev < node.val;
            if(!result) valid = false;
        }
        
        inOrderTraversal(node.right, node.val, valid);
    }
}



const root = new TreeNode(5);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6);
const node3 = new TreeNode(3);
const node7 = new TreeNode(7);
node6.left = node3;
node6.right = node7;
root.left = node4;
root.right = node6;

inOrderTraversal(root,null, true)
console.log(valid)


// const rootValid = new TreeNode(10);
// const node8 = new TreeNode(8);
// const node7 = new TreeNode(7);
// const node15 = new TreeNode(15);
// const node13 = new TreeNode(13);
// const node20 = new TreeNode(20);
// const node9 = new TreeNode(9);

// node15.left = node13;
// node15.right = node20;

// node8.left = node7;
// node8.right = node9;

// rootValid.left = node8;
// rootValid.right = node15;


 //console.log(inOrderTraversal(rootValid))

// const rootValid = new TreeNode(2);
// const node1 = new TreeNode(1);
// const node3 = new TreeNode(3);


// rootValid.left = node1;
// rootValid.right = node3;
// console.log(inOrderTraversal(rootValid))
