'use strict';

/**
 * A file Pawn.js will provide the all the possible moves from given input.
 * The pawn can only move one space forward
 * We have to find all the possible locations the pawn can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

let valid_moves = [];
async function findPosition(row, col) {

    if (col != 1 && col != 8) {
        valid_moves.push(helpers.getRowLetters(row)+(col + 1));
        valid_moves.push(helpers.getRowLetters(row)+(col - 1));
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
