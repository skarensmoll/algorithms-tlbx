

function Comparator(array) {
  this.arr = array;
}

Comparator.prototype.checker = function() {
  return this.mergeSort(0, this.arr.length - 1);
}

Comparator.prototype.mergeSort = function(start, end) {
  if(start === end) {
    return [this.arr[start]];
  }

  const middle = Math.floor((end + start) / 2);
  const first = this.mergeSort(start, middle);
  const second = this.mergeSort(middle + 1, end);

  console.log('first', first, 'second', second);

  const result = this.merge(first, second);
  console.log('result', result);

  return result;
}

Comparator.prototype.merge = function(first, second) {
  let i = 0;
  let j = 0;
  let sizeFirst = first.length - 1;
  let sizeSecond = second.length - 1;
  const result = [];

  while(i <= sizeFirst && j <= sizeSecond) {
    if(first[i].score === second[j].score) {
      console.log('equals', i , j)
      const [fN, sN] = this.compareNames(i,j, first, second);
      console.log('fN', fN, 'sn', sN)
      result.push(fN);
      result.push(sN);
      i++;
      j++;
      continue;
    }
    if(first[i].score > second[j].score) {
      result.push(first[i++]);
      continue;
    } else {
      result.push(second[j++]);
      continue;
    }
  }

  while(i <= sizeFirst){
    result.push(first[i++]);
  }

  while(j <= sizeSecond){
    result.push(second[j++]);
  }

  return result;
}

Comparator.prototype.compareNames = function(i, j, first, second) {
  if(first[i].name > second[j].name) {
    return [second[j], first[i]];
  } else {
    return [first[i], second[j]];
  }
}

Comparator.prototype.print = function(arr) {
  return arr.map((item) => {
    return `${item.name} ${item.score}`;
  }).join('\n');
}

const people = [
  { name: 'amy', score: 100},
  { name: 'david', score: 100},
  { name: 'heraldo', score: 50},
  { name: 'aakansha', score: 75},
  { name: 'aleksa', score: 150}
];

const comparator = new Comparator(people);


console.log(comparator.print(comparator.checker()));

