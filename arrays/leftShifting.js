function leftRotation(numRotation, a) {
  if(numRotation === 0) return a;
  const numShiftsLeft = numRotation % a.length;

  const firstPart = a.slice(0, numShiftsLeft);
  const secondPart = a.slice(numShiftsLeft);

  const result = secondPart.concat(firstPart);

  return result;
}

console.log(leftRotation(2, [1, 2, 3, 4, 5])); //[ 3, 4, 5, 1, 2 ]
console.log(leftRotation(4, [1, 2, 3, 4, 5])); //5 1 2 3 4
console.log(leftRotation(12, [1, 2, 3, 4, 5])); //[ 3, 4, 5, 1, 2 ]
console.log(leftRotation(0, [1, 2, 3, 4, 5])); //[ 3, 4, 5, 1, 2