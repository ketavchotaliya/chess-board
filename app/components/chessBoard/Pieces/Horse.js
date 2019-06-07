'use strict'

let valid_moves = [];

async function findPosition(row, col) {
    const rowStepsArray = [ 2, 2, -2, -2, 1, 1, -1, -1 ];
    const colStepsArray = [ -1, 1, 1, -1, 2, -2, 2, -2 ];

    for (let i = 0; i <= 7; i++) {
        let estimatedRowPositoin = row + rowStepsArray[ i ];
        let estimatedColPositoin = col + colStepsArray[ i ];
        if ( (estimatedRowPositoin > 0 && estimatedRowPositoin <= 8) && (estimatedColPositoin > 0 && estimatedColPositoin <= 8) ) {
            valid_moves.push(helpers.getRowLetters(estimatedRowPositoin) + estimatedColPositoin )
        }
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
