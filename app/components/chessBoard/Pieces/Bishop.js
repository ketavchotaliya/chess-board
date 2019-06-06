'use strict'

async function findPosition(row, col) {

    let valid_moves = [];

    for (let i = 1; i <= row; i++) {
        if (row - i > 0) {
            valid_moves.push(helpers.getRowLetters(row - i) + ( col + i ));
        }
    }

    for (let i = 1; i <= ( 8 - col ); i++) {
        if (( row + i ) <= 8) {
            valid_moves.push(helpers.getRowLetters(row + i) + ( col + i ));
        }
    }

    for (let i = 1; i <= ( 8 - row ); i++) {
        if (( col - i ) > 0) {
            valid_moves.push(helpers.getRowLetters(row + i) + ( col - i ));
        }
    }

    for (let i = row; i >= 0; i--) {
        if (col - i > 0 && col - i != col) {
            valid_moves.push(helpers.getRowLetters(row - i) + ( col - i ));
        }
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
