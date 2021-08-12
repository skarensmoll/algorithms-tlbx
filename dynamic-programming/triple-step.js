const pos = [1,2,3];

function possiblePaths(nStairs, memo={} ) {
    if (nStairs == 0) return 1;
    if (nStairs < 0) return 0;
    if (memo[nStairs]) return memo[nStairs];

    let count = 0;
    pos.forEach(p => {
        const nPoss = possiblePaths(nStairs - p, memo);
        count += nPoss;
    });
    memo[nStairs] = count;

    return count;
}


console.log(possiblePaths(5)) // 13
console.log(possiblePaths(3)) // 4
