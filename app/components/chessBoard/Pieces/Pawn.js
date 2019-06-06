'use strict'


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
