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


LinkedList.prototype.getKthNode = function(k, node) {
    if(node === undefined) return { acc: 0 };

    let result = this.getKthNode(k, node.next);
    result.acc += 1;

    if(result.acc === k) return { value: node.value, acc: result.acc  }  
    else return result;

}

///////////

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
console.log(linkedList.getKthNode(3, linkedList.head));
