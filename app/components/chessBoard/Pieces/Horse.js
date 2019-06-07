'use strict'

let valid_moves = [];

async function findPosition(row, col) {
    const rowStepsArray = [ 2, 2, -2, -2, 1, 1, -1, -1 ];
    const colStepsArray = [ -1, 1, 1, -1, 2, -2, 2, -2 ];

    for (let i = 0; i <= 7; i++) {
        valid_moves.push(
            helpers.getRowLetters(row + rowStepsArray[ i ]) +
            ( col + colStepsArray[ i ] )
        )
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
