
function MinimumSwaps(a) {
  this.elements = a;
}

MinimumSwaps.prototype.swap = function (i1, i2) {
  const i1OldValue = this.elements[i1];
  this.elements[i1] = this.elements[i2];
  this.elements[i2] = i1OldValue;

  return [this.elements[i1], this.elements[i2]]
}

MinimumSwaps.prototype.lookup = function(startIndex, value){
  const size = this.elements.length;
  for(var i = startIndex; i < size; i++) {
    if (this.elements[i] === value) {
      break;
    }
  }
  return i;
}

MinimumSwaps.prototype.validateOrder = function() {
  let numSwaps = 0;

  for(let i = 0; i < this.elements.length; i++) {
    if(this.elements[i] !== i + 1) {
      const indexValue = this.lookup(i + 1, i + 1);
      this.swap(i, indexValue);
      numSwaps++;
    }
  }

  return numSwaps;
}

const min = new MinimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]);
console.log(min.validateOrder());
