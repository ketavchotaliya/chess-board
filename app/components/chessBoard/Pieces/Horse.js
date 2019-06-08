'use strict';

/**
 * A class Horse will provide the all the possible moves from given input.
 * Horse Can move across the board only in 2.5 steps.
 * 2 vertical steps and 1 horizontal step.
 * A hourse can move in 8 possible directions.
 * We have to find all the possible locations the Horse can move to from the given location.
 * @param positionRow <string>, positionCol <number>
 * @return array
 */

class Horse {
    static findPosition(positionRow, positionCol) {
        // get Row number from Row key (e.g. A, B, C)
        const row = helpers.getRowNumbers(positionRow);
        const col = positionCol;

        let valid_moves = [];
        /**
         * possibilities array for house movement
         */
        const rowStepsArray = [ 2, 2, -2, -2, 1, 1, -1, -1 ];
        const colStepsArray = [ -1, 1, 1, -1, 2, -2, 2, -2 ];

        /**
         * horse movement formula
         * (row + rowStep[i], col + colStep[i])
         */
        for (let i = 0; i <= 7; i++) {
            let estimatedRowPositoin = row + rowStepsArray[ i ];
            let estimatedColPositoin = col + colStepsArray[ i ];

            /**
             * validate estimated position.
             * position must in between 1 to 8 for column and A to H for Row
             */

            if (
                ( estimatedRowPositoin > 0 && estimatedRowPositoin <= 8 ) &&
                ( estimatedColPositoin > 0 && estimatedColPositoin <= 8 )
            ) {
                valid_moves.push(helpers.getRowLetters(estimatedRowPositoin) + estimatedColPositoin)
            }
        }

        return valid_moves;
    }
}

module.exports = Horse;
