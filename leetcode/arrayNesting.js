function Sequence() {
  this.count = 0;
  this.queue = new Set([]);
}

const arrayNesting = (array) => {
  let longSeq = new Sequence(array);

  for(let i = 0; i < array.length; i++) {
    if(longSeq.queue.has(i)) continue;
    const seq = new Sequence();
    findSequence(i, array, seq);
    longSeq = longSeq.count > seq.count ? longSeq : seq;
  }

  return longSeq.count;
}

const findSequence = (i, array, seq) => {
    if(seq.queue.has(i)) {
      return;
    }
    seq.count +=1;
    seq.queue.add(i);

    findSequence(array[i], array, seq);
}

console.log(arrayNesting([5,4,0,3,1,6,2]));