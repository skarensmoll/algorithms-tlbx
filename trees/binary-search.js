

function Node(value, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
}


function binaryTree(arr, lo, hi) {
    //console.log(lo , hi);
    if (lo >= hi) return arr[lo];

     const half = Math.ceil((lo + hi) / 2);
     console.log('half' , half)

     const left = lo == half ? null : binaryTree(arr, lo, half - 1);
     const right = half == hi ? null :  binaryTree(arr, half + 1, hi);

     const node = new Node(arr[half], left, right);
     console.log(node);

     return node;
}


// const arr = [1, 2, 3, 4, 5 ,6 ,7 ,8, 9, 10, 11, 12, 13, 14, 15]
const arr = [1, 2, 3, 4, 5 ,6 ,7 ,8, 9, 10]
binaryTree(arr, 0, arr.length - 1);
