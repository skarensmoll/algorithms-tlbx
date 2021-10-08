

function TreeNode(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}

const node4 = new TreeNode(4);
node4.left = new TreeNode(8);
node4.right = new TreeNode(9);

const node5 = new TreeNode(5);
node5.left = new TreeNode(10);
node5.right = new TreeNode(11);

const node6 = new TreeNode(6);
node6.right = new TreeNode(13);

const node7 = new TreeNode(7);
node7.left = new TreeNode(14);

const node2 = new TreeNode(2);
node2.left = node4;
node2.right = node5;

const node3 = new TreeNode(3);
node3.left = node6;
node3.right = node7;

const root = new TreeNode(1);
root.left = node2;
root.right = node3;

function Node(value, next = null) {
    this.next = next;
    this.value = value;
}



function listDepths(treeNode) {
    if(treeNode.left === null && treeNode.right === null) {
        return [ new Node(treeNode.value) ]
    }

    let leftPaths = treeNode.left === null ? [] : listDepths(treeNode.left);
    let rightPaths = treeNode.right === null ? [] : listDepths(treeNode.right);

    console.log('leftPaths', leftPaths);
    console.log('rightPaths', rightPaths);
    
    leftPaths = leftPaths.map(node => {
        const newNode = new Node(treeNode.value);
        newNode.next = node;
        return newNode
    });

    rightPaths = rightPaths.map(node => {
        const newNode = new Node(treeNode.value);
        newNode.next = node;
        return newNode;
    });

    return [ ...leftPaths, ...rightPaths  ]
}


/// [ node, node, node, node ]
const nodes = listDepths(root);

console.log(nodes)
