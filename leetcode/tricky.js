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