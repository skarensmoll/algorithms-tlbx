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


LinkedList.prototype.print = function() { console.log(this.head); }

LinkedList.prototype.getSize = function() { console.log(this.size); }

const n1 = new Node('Karen');
const linkedList = new LinkedList(n1);
linkedList.addNode(new Node('Eliana'));
linkedList.addNode(new Node('Emily'));
linkedList.addNode(new Node('Eliana'));
linkedList.addNode(new Node('Emily'));
console.log(linkedList.tail);
linkedList.print();
linkedList.clear();
linkedList.print();
console.log(linkedList.tail);
