function Node(value) {
    this.value = value;
    this.next;
}

function LinkedList(node) {
    this.head = node;
    this.size = 1;
    this.tail = node;
}

LinkedList.prototype.addNode = function (newNode) {
    let insertedNode = false;
    let node = this.head;

    while(!insertedNode) {
        if (!node.next) { 
            node.next = newNode;
            this.tail = newNode;
            this.size += 1;
            insertedNode = true;
            break;
        }
        
        node = node.next;
    }
}

LinkedList.prototype.clear = function () {
    this.head = null;
    this.tail = null;
}


LinkedList.prototype.print = function() { 
    let node = this.head;
    while(node) {
        console.log( node.value);
        node = node.next
    }
 }

LinkedList.prototype.getSize = function() { console.log(this.size); }


LinkedList.prototype.getKthNodeBruteForce = function(k) {
    if(this.head === null) return null;
    
    let node = this.head;
    let size = 0;

    //first we get to know the size 
    while(node) {
        node = node.next
        size +=1;
    }

    if(k > size) return null;
    const position = size - k;
    let i = 0;
    let pivot = this.head;

    const value = null;
    
    while (i < position) {
        pivot = pivot.next;
        i++;
    }

    console.log('Kth Element value:', pivot)

}

// Tests
const n1 = new Node('test');
const linkedList = new LinkedList(n1);
linkedList.addNode(new Node('test1'));
linkedList.addNode(new Node('test2'));
linkedList.addNode(new Node('test3'));
linkedList.addNode(new Node('test4'));
linkedList.addNode(new Node('test5'));
linkedList.addNode(new Node('test6'));
linkedList.addNode(new Node('test7'));
linkedList.getSize();
linkedList.print();

linkedList.getKthNodeBruteForce(3);  // O(n) approach
