function getPath(position, finalPosition, matrix) {
    console.log(position)
    const [pr, pc] = position;
    const [fr, fc] = finalPosition;

    if (pr === fr && pc === fc) return [position];
    if ((pr > fr || pc  > fc)  || ( matrix[pr][pc] == 'x' )) return null;


    const leftR = getPath([pr + 1, pc], finalPosition, matrix); // null
    const rightR = getPath([pr, pc + 1], finalPosition, matrix); // value


    if(!leftR && !rightR) return null;
    
    const result = leftR ? leftR : rightR;
    return  [  position, ...result ];
}

const matrix = [ ['-', '-', 'x'],
                 ['-', 'x', '-'],
                 ['-', '-', '-'] ];


console.log(getPath([0, 0], [2,2], matrix))
