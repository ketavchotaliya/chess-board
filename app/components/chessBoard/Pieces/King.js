'use strict';

/**
 * A file King.js will provide the all the possible moves from given input.
 * The King can move across the board only in 1 steps in any direction.
 * We have to find all the possible locations the King can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

async function findPosition(row, col) {
    let valid_moves = []
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (row - i != 0)
                if (col - j > 0 && col - j <= 8)
                    if (!((row - i) == row && (col - j) == col)) {
                        valid_moves.push(helpers.getRowLetters(row - i) + ( col - j ));
                    }
        }
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
