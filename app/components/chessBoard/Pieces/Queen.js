'use strict';

/**
 * A file Queen.js will provide the all the possible moves from given input.
 * The queen can be moved any number of unoccupied squares in a straight
 * line vertically, horizontally, or diagonally.
 * The Queen is a combination of Rook and Bishop
 * We have to find all the possible locations the Queen can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

let valid_moves = [];

async function findPosition(positionRow, positionCol) {
    const rookMovement = await require('../Pieces/Rook')(positionRow, positionCol);
    const bishopMovement = await require('../Pieces/Bishop')(positionRow, positionCol);

    return valid_moves = underscoreObj.union(rookMovement, bishopMovement);
}

module.exports = async (positionRow, positionCol) => {
    return await findPosition(positionRow, positionCol);
}
