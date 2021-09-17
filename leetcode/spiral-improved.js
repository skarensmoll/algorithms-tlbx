function spiral(matrix, result = []) {
    if(matrix.length == 0){
        return result;
    }
        

    /// remove first row - rigth
    result = result.concat(matrix.shift());

    // remove last column
    for(let i = 0; i < matrix.length; i++) {
        result = result.concat(matrix[i].pop())
    }

    // remove last row 
    result = result.concat(matrix.pop().reverse());

    // remove first column
    for(let i = 0; i < matrix.length; i++) {
        result =result.concat(matrix[i].shift())
    }
    return spiral(matrix, result);
}
