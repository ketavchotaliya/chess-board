'use strict'

async function findPosition(row, col) {
    let valid_moves = []
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (row - i != 0)
                if (col - j > 0 && col - j <= 8)
                    if (!(helpers.getRowLetters(row - i) == helpers.getRowLetters(row)
                        && (col - j) == col))
            valid_moves.push(helpers.getRowLetters(row - i) + (col - j));
        }
    }

    return valid_moves;
}

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
