function InsertionSort(arr) {
  this.arr = arr;
}

InsertionSort.prototype.execute = function() {
  for(let pivot = 0; pivot < this.arr.length - 1; pivot++) {
    if(this.arr[pivot] > this.arr[pivot + 1]) {
      let reversePivot = pivot + 1;
      while(reversePivot > 0 &&
        this.arr[reversePivot] < this.arr[reversePivot - 1]) {
        this.swap(reversePivot, reversePivot - 1);
        reversePivot--;
      }
    }
  }
  return this.arr;
}

InsertionSort.prototype.swap = function(firstIndex, secondIndex) {
  const secondItem = this.arr[secondIndex];
  this.arr[secondIndex] = this.arr[firstIndex];
  this.arr[firstIndex] = secondItem;
}

function maximizeToys(budget, arr) {
  const insertionSort = new InsertionSort(arr);
  insertionSort.execute();

  const toys = [];
  let sum = 0;
  let i = 0;

  while( sum < budget) {
    sum += arr[i];
    if(sum < budget) {
      toys.push(arr[i]);
    }

    i++;
  }
  return toys.length;
}

console.log(maximizeToys(50,[1, 12, 5, 111, 200, 1000, 10]))

