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
    const newValue = [key, value]
    const tableIndex = this.table[index];

    if(!tableIndex) {
        this.table[index] = [newValue];
        return;
    }

    tableIndex.forEach(item => {
        if (item[0] === key) {
            item = [newValue];
            return;
        }
    });

    tableIndex.push([key, value]);
}

HashTable.prototype.get = function(key) {
    const index = this.hash(key);

    if(!this.table[index]) return null;
    
    let value = null;

    this.table[index].forEach(item => {
        if(item[0] === key) {
            value = item[1];
            return ;
        }
    })

    return value;
}

HashTable.prototype.remove = function(key) {
    const index = this.hash(key);

    if(!this.table[index]) return;

    this.table[index].forEach((item, i) => {
        if(item[0] === key) {
            this.table[index].splice(i, 1);
        }
    });
}

const maxSize = 10;
const hashTable = new HashTable(maxSize);

console.log(new HashTable(maxSize))
console.log(hashTable.set('apple', 32))
console.log(hashTable.set('apply', 32))
console.log(hashTable.set('pineapple', 102))
console.log(hashTable.table)
console.log(hashTable.get('pineapple'))
console.log('apple', hashTable.get('apple')) 
hashTable.remove('apple');
console.log(hashTable.get('apple')) // undefined
console.log(hashTable.get('apply')) // undefined
