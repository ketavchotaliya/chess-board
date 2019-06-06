'use strict'

let valid_moves = [];

async function findPosition(positionRow, positionCol) {
    const rookMovement = await require('../Pieces/Rook')(positionRow, positionCol);
    const bishopMovement = await require('../Pieces/Bishop')(positionRow, positionCol);

    return valid_moves = underscoreObj.union(rookMovement, bishopMovement);
}

module.exports = async (positionRow, positionCol) => {
    return await findPosition(positionRow, positionCol);
}
