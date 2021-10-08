function repeatedArithmeticShift(x, count) {
  for (let i = 0; i < count; i++) {
    x >>= 1;
  }
  return x;
}

console.log(repeatedArithmeticShift(567, 40));