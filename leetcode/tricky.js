<<<<<<< HEAD
function Tricky(moves){
  this.rowResults = [0 , 0 , 0];
  this.colResults = [0, 0, 0];
  this.rightDiagonal = 0;
  this.leftDiagonal = 0;
  this.currentPlayer = 1;
  this.moves = moves;
  this.remainingMoves = 9;

  this.status = {
    DRAW: 'Draw',
    PENDING: 'Pending',
    '-1': 'A',
    '1': 'B'
  }

  this.checkWinner = function () {
    while (this.moves.length > 0) {
      const [row, column] = this.moves.shift();
      this.remainingMoves -= 1;

      this.rowResults[row] += this.currentPlayer;
      if(this.hasWon(this.rowResults[row])) return this.status[this.currentPlayer]

      this.colResults[column] += this.currentPlayer;
      if(this.hasWon(this.colResults[column])) return this.status[this.currentPlayer]

      if (row === column) {
        this.leftDiagonal += this.currentPlayer;
        if(this.hasWon(this.leftDiagonal)) return this.status[this.currentPlayer]
      }

      if ((row + column) === 2) {
        this.rightDiagonal += this.currentPlayer;
        if(this.rightDiagonal) return this.status[this.currentPlayer]
      }

      this.currentPlayer *= -1;
    }

    if(this.remainingMoves === 0) return this.status.DRAW
    if(this.remainingMoves > 0) return this.status.PENDING
  }

  this.hasWon = function (value) {
    return Math.abs(value) === 3;
  }
}

console.log(new Tricky([[0,0],[2,0],[1,1],[2,1],[2,2]]).checkWinner())
=======
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


>>>>>>> 804ef79ffc3b7067e0044180d99db5ba1f13e10a
