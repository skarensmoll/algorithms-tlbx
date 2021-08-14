function getPath(position, finalPosition) {
    const [pr, pc] = position;
    const [fr, fc] = finalPosition;

    if (pr === fr && pc === fc) return 1;
    if (pr > fr || pc  > fc) return 0;


    const leftR = getPath([pr + 1, pc], finalPosition); // null
    const rightR = getPath([pr, pc + 1], finalPosition); // value
    
    return leftR + rightR;
}



console.log(getPath([0, 0], [2, 2]))  // 6  possible paths
