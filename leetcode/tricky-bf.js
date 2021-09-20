function Tricky(moves) {
  this.moves = moves;
  this.matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  this.Statuses = {
    DRAW: 'draw',
    PENDING: 'pending',
    '3': 'A',
    '-3': 'B'
  }

  this.currentPlayer = 1;

  this.numAvailableMoves = 9;

  this.checkWinner = function () {
    while(this.moves.length > 0) {
      const [row, column] = this.placeMove();

      var [winner, player] = this.checkRow(row);
      if(winner) return this.Statuses[player];

      var [winner, player] = this.checkColumn(column);
      if(winner) return this.Statuses[player];

      var [winner, player] = this.checkLeftDiagonal(row, column);
      if(winner) return this.Statuses[player];

      var [winner, player] = this.checkRightDiagonal(row, column);
      if(winner) return this.Statuses[player];
    }

    if(this.numAvailableMoves > 0)
      return this.Statuses.PENDING;

    if(this.numAvailableMoves === 0)
      return this.Statuses.DRAW;

  }

  this.placeMove = function() {
    const move = this.moves.shift();
    this.matrix[move[0]][move[1]] = this.currentPlayer;
    this.currentPlayer *= -1;
    this.numAvailableMoves--;
    return [move[0], move[1]];
  }

  this.checkRow = function (row) {
    let counter =  this.matrix[row].
      reduce((prev, current) => prev + current);

    return [Math.abs(counter) === 3, counter]
  }

  this.checkColumn = function (column) {
    let counter = 0;
    for(let i = 0; i <= 2; i++) {
      counter += this.matrix[i][column]
    }
    return [Math.abs(counter) === 3, counter]
  }

  this.checkLeftDiagonal = function (row, column) {
    if(row !== column) return [false, null];
    let counter = 0;

    for(let i = 0; i<=2; i++) {
      counter += this.matrix[i][i]
    }

    return [Math.abs(counter) === 3, counter]
  }

  this.checkRightDiagonal = function (row, column) {
    if((row + column) !== 2) return [false, null];
    let counter = 0;

    for(let i = 0; i<=2; i++) {
      counter += this.matrix[i][2-i];
    }

    return [Math.abs(counter) === 3, counter]
  }

}



const moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];
const tricky = new Tricky(moves);

console.log(tricky.checkWinner()); // draw


console.log(new Tricky([[0,0],[1,1]]).checkWinner()); // draw


console.log(new Tricky([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]).checkWinner()); // B

console.log(new Tricky([[0,0],[2,0],[1,1],[2,1],[2,2]]).checkWinner()); // A


