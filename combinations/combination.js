const createCombination = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  const firstElement = arr[0];
  const rest = arr.slice(1);

  const combinationsWithout = createCombination(rest);
  const listCombWithFirst = [];

  console.log('combinationsWithout', combinationsWithout);

  combinationsWithout.forEach(comb => {
    const combWithFirst = [firstElement, ...comb];
    listCombWithFirst.push(combWithFirst);
  });

  return [...listCombWithFirst, ...combinationsWithout];
}

console.log(createCombination(['a', 'b']))