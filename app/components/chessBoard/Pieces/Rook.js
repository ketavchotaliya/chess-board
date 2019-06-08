'use strict';

/**
 * A class Rook will provide the all the possible moves from given input.
 * The rook moves horizontally or vertically, through any number of squares
 * We have to find all the possible locations the rook can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

class Rook {
    static findPosition(positionRow, positionCol) {
        const row = helpers.getRowNumbers(positionRow);
        const col = positionCol;
        const row_letters = helpers.getObjectValues(Constants.getRowPosition());
        let valid_moves = [];

        for (let i of row_letters) {
            if (i == row) {
                for (let j = 1; j <= 8; j++) {
                    if (j != col)
                        valid_moves.push(`${helpers.getRowLetters(row_letters[ i ])}${j}`);
                }
            } else {
                valid_moves.push(`${helpers.getRowLetters(i)}${col}`);
            }
        }

        return valid_moves;
    }
}

module.exports = Rook;
