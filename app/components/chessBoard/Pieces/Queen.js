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
const Bishop = require('./Bishop');
const Rook = require('./Rook');

class Queen {
    static findPosition(positionRow, positionCol) {

        const rookMovement = Rook.findPosition(positionRow, positionCol);
        const bishopMovement = Bishop.findPosition(positionRow, positionCol);

        return underscoreObj.union(rookMovement, bishopMovement);

    }
}

module.exports = Queen;
