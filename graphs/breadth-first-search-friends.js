function Node(value) {
    this.value = value;
    this.edgeList = [];
    this.path = 1;

    this.connnect = (node) => {
        this.edgeList.push(node);
    }
}

const ha = new Node('ha');
const ma = new Node('ma');
const mel = new Node('mel');
const max = new Node('max');
const pao = new Node('pao');
const nio = new Node('nio');
const cri = new Node('cri');
const yair = new Node('yair');
const mabel = new Node('mabel');
const liz = new Node('liz');
const nico = new Node('nico');


ha.connnect(mel);
ha.connnect(max);
ha.connnect(liz);
ha.connnect(nio);
ha.connnect(ma);

nio.connnect(pao);
nio.connnect(cri);
nio.connnect(yair);
nio.connnect(ha);

cri.connnect(nio);
cri.connnect(yair);
cri.connnect(nico);

yair.connnect(mabel);
yair.connnect(liz);
yair.connnect(nio);

liz.connnect(mabel);
liz.connnect(yair);
liz.connnect(ha);

function breadthFirstSearch(start, target) {
    const queue = [start];
    const visitedNodes = new Set();

    while(queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
        visitedNodes.add(currentNode);

        if(currentNode.value === target.value) {
            console.log('found it ', currentNode.path);
            return;
        }
        
        for(const edge of currentNode.edgeList) {
            if(!visitedNodes.has(edge)) {
                edge.path += currentNode.path;
                visitedNodes.add(edge);
                queue.push(edge);
            }
        }
    }
}

breadthFirstSearch(ha, mabel);  // Expected 3
