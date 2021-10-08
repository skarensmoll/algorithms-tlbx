function Sequence() {
  this.count = 0;
  this.queue = new Set([]);
}

const arrayNesting = (array) => {
  let longSeq = new Sequence(array);

  for(let i = 0; i < array.length; i++) {
    if(longSeq.queue.has(i)) continue;

    const seq = new Sequence();
    let newIndex = i;

    while(!seq.queue.has(newIndex)) {
      seq.count +=1;
      seq.queue.add(newIndex);
      newIndex = array[newIndex];
    }

    longSeq = longSeq.count > seq.count ? longSeq : seq;
  }

  return longSeq.count;
}
console.log(arrayNesting([5,4,0,3,1,6,2]));