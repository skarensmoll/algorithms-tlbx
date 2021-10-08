// Trie Implementation
function Node(key) {
  this.value = null;
  this.key = key;
  this.children = {}
}

function Trie() {
  this.root = new Node();

  this.insert = (word) => {
    let currentNode = this.root;

    while(word.length > 0) {
      const key = word[0];
      const childNode = currentNode.children[key];

      if (childNode) { // node exists already
          currentNode = childNode;
      } else {
        // node does not exists
        currentNode.children[key] = new Node(key);
        currentNode = currentNode.children[key];
      }
      word = word.substring(1);
    }
    console.log(this.root);
  }

  this.lookup = (word) => {
    let currentNode = this.root;
    let wordFound = true;

    while(word.length > 0) {
      const key = word[0];
      const childNode = currentNode.children[key];

      if (childNode){ //character Found
        word = word.substring(1);
        currentNode = childNode;
        continue;
      }
      word = '';
      wordFound = false;
    }

    console.log('word', wordFound ? 'found': 'not found');
  }
}

const trie = new Trie();
trie.insert('karen');
trie.insert('klark');
trie.insert('karina');
trie.insert('katherine');

trie.lookup('karen'); //found
trie.lookup('kalorenita'); // not found
trie.lookup('kar'); //found
