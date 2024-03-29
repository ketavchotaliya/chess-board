'use strict';

/**
 * A Class Pawn will provide the all the possible moves from given input.
 * The pawn can only move one space forward
 * We have to find all the possible locations the pawn can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

class Pawn {
    static findPosition(positionRow, positionCol) {

        const row = helpers.getRowNumbers(positionRow);
        const col = positionCol;

        let valid_moves = [];

        if (col != 1 && col != 8) {
            valid_moves.push(helpers.getRowLetters(row) + ( col + 1 ));
            valid_moves.push(helpers.getRowLetters(row) + ( col - 1 ));
        }

        return valid_moves;
    }
}

module.exports = Pawn;


