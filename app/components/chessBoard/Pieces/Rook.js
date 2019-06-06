'use strict'


    let valid_moves = [];
    async function findPosition(row, col) {
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

module.exports = async (positionRow, positionCol) => {
    const rowNumber = helpers.getRowNumbers(positionRow);
    const colNumber = positionCol;

    return await findPosition(rowNumber, colNumber);
}
