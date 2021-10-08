
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

function arrangeSubTree(node) {
    let swapped = false;
    if( node.left &&  node.value < node.left.value) {
        const oldValue = node.value;
        node.value = node.left.value;
        node.left.value = oldValue;
        swapped = true;
    }

    if( node.right &&  node.value < node.right.value) {
        const oldValue = node.value;
        node.value = node.right.value;
        node.right.value = oldValue;
        swapped = true;
    }
    return swapped;
}

function isheapified(node) {node.value > node.left.value;
    const leftHeapified = !node.left ? true : node.value > node.left.value;
    const rightHepified = !node.right ? true : node.value > node.right.value;
  
    return leftHeapified && rightHepified;
}

function heapify(node) {
    if (node == null) return;
    if(!node.left  && !node.right) return;
    if(isheapified(node)) return;

    heapify(node.left);
    heapify(node.right);

    const swappedNodes = arrangeSubTree(node)

    if(swappedNodes) {
        heapify(node.left);
        heapify(node.right);
    }
}


/// Test 1
const arr1 = [3, 9, 2, 1, 4, 5];
const root1 = trasformToBinaryTree(arr1);
heapify(root1);
console.log(arr1, root1);

/// Test 2
const arr2 = [10, 15, 20, 17];
const root2 = trasformToBinaryTree(arr2);
heapify(root2);
console.log(arr2, root2);

// Test 3
const arr3 = [1, 14, 7, 8, 3];
const root3 = trasformToBinaryTree(arr3);
heapify(root3);
console.log(arr3, root3);


// Test 4
const arr4 = [10, 15, 40, 100, 50, 30]
const root4 = trasformToBinaryTree(arr4);
heapify(root4);
console.log(arr4, root4);


// Test 5
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const root5 = trasformToBinaryTree(arr5);
heapify(root5);
console.log(arr5, root5);

