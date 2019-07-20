const Rook = require('./Rook');
const Pawn = require('./Pawn');
const Horse = require('./Horse');
const Bishop = require('./Bishop');
const Queen = require('./Queen');
const King = require('./King');

class PieceFinder {
  static getPiece(piece) {
    switch (piece.toLowerCase()) {
      case 'king':
        return King;
      case 'queen':
        return Queen;
      case 'bishop':
        return Bishop;
      case 'horse':
        return Horse;
      case 'rook':
        return Rook;
      case 'pawn':
        return Pawn;
    }
  }
}

module.exports = PieceFinder;
