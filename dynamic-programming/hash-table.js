function HashTable(maxSize) {
    this.table = new Array(maxSize);
    this.max = maxSize;
}

HashTable.prototype.hash = function(key) {
    let hashCode = 0;
    for(let i = 0; i < key.length; i++) {
        hashCode += key.charCodeAt(i);
    }
    return hashCode % this.max;
}

HashTable.prototype.set = function(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
}

HashTable.prototype.get = function(key) {
    const index = this.hash(key);
    return this.table[index];
}

const maxSize = 10;
const hashTable = new HashTable(maxSize);

console.log(new HashTable(maxSize))
console.log(hashTable.set('apple', 32))
console.log(hashTable.set('pineapple', 102))
console.log(hashTable.table)
console.log(hashTable.get('pineapple')) // 102
