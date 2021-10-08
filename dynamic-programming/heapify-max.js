const arr = [3, 9, 2, 1, 4, 5];


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
console.log(root);


function heapify(node, prev = null) {
    if(node === null) return prev;

    node.value = heapify(node.right, node.value);
    node.value = heapify(node.left, node.value);

    if(prev === null) return node;
    if(node.value > prev) {
        const oldValue = node.value;
        node.value = prev;
        return oldValue;
    } else { return prev; }
}

console.log(heapify(root));
