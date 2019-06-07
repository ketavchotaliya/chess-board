'use strict';

/**
 * A file Rook.js will provide the all the possible moves from given input.
 * The rook moves horizontally or vertically, through any number of squares
 * We have to find all the possible locations the rook can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */


function findPosition(row, col) {
    let valid_moves = [];
    const row_letters = helpers.getObjectValues(constants.getRowPosition);

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

module.exports = (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return findPosition(rowNumber, colNumber);
}
