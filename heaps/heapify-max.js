//const arr = [3, 9, 2, 1, 4, 5];
const arr = [1, 14, 7, 8, 3];


function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function trasformToBinaryTree(arr, i = 0) {
    if(i >= arr.length) return null;

    const node = new Node(arr[i]);
    const left = trasformToBinaryTree(arr, (i * 2) + 1);
    const right = trasformToBinaryTree(arr, (i * 2) + 2);

    node.left = left;
    node.right = right;

    return node;
}

const root = trasformToBinaryTree(arr);
console.log('binary tree', root);


function heapify(node) {
    if(node == null) return;

    if(node.left && (node.value < node.left.value)) {
        const oldValue = node.value;
        node.value = node.left.value;
        node.left.value = oldValue;
    }

    if(node.right && (node.value < node.right.value)) {
        const oldValue = node.value;
        node.value = node.right.value;
        node.right.value = oldValue;
    }

    heapify(node.left);
    heapify(node.right);
}
heapify(root)
console.log('after heapify', root);
