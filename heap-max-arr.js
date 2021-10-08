const arr = [3, 9, 2, 1, 4, 5];

function buildHeap(arr) {
  const size = arr.length;
  const lastNodeIndex = Math.floor(size / 2) - 1;
  for (let i = lastNodeIndex; i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify(arr, i) {
  const leftIndex = (i * 2) + 1;
  const rightIndex = (i * 2) + 2;

  if(arr[i] == null) return;
  if(arr[leftIndex] == undefined && arr[rightIndex] == undefined) return;

  const wasRearranged = reArrange(arr, i, leftIndex, rightIndex);
  if (wasRearranged) {
    heapify(arr, leftIndex);
    heapify(arr, rightIndex);
  }
}

function reArrange(arr, i, l, r) {
  let rearranged = null;

  const lefVal = arr[l];
  const rigVal = arr[r];

  if(lefVal !== undefined && lefVal > arr[i]) {
    const prev = arr[i];
    arr[i] = lefVal;
    arr[l] = prev;
    rearranged = true;
  }

  if(rigVal !== undefined && rigVal > arr[i]) {
    const prev = arr[i];
    arr[i] = rigVal;
    arr[r] = prev;
    rearranged = true;
  }

  return rearranged;
}

buildHeap(arr);
console.log(arr);