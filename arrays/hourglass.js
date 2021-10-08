

// const matrix =
// [[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 2, 4, 4, 0],
// [0, 0, 0, 2, 0, 0],
// [0, 0, 1, 2, 4, 0]]


const matrix = [
[-1, 1, -1, 0 ,0, 0],
[0, -1, 0, 0, 0, 0],
[-1, -1, -1 ,0 ,0 ,0],
[0, -9, 2, -4, -4, 0],
[-7, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0],
]


function hourGlassSum(matrix) {
  let maxSum = null;
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      const firstRow = matrix[row][col] +
                      matrix[row][col + 1] +
                      matrix[row][col + 2];

      const middleRow = matrix[row + 1][col + 1];
      const endRow = matrix[row + 2][col] +
      matrix[row + 2][col + 1] +
      matrix[row + 2][col + 2];


      const result = firstRow + middleRow + endRow;
      console.log('result', result, 'firstRow' , firstRow, 'middleRow' , middleRow,'endRow', endRow, maxSum);
      maxSum = maxSum === null ? result : Math.max(result, maxSum);
      console.log(maxSum);
    }
  }

  return maxSum;
}

console.log(hourGlassSum(matrix));