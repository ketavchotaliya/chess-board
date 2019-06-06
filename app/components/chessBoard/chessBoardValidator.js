'use strict';
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = {
    // validate the request and send error response if fail
    checkValidationResult: (req, res, next) => {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            helpers.createResponse(res, constants.http_status_code.UNPROCESSED,
                result.array()[ 0 ].msg, {}
            );
            return;
        } else {
            next();
        }
    },

    chessBoardRouteValidate: (method) => {
        switch (method) {
            case 'input_validation':
                const validPiece = [ 'King', 'Queen', 'Bishop', 'Horse', 'Rook', 'Pawn' ];
                const validRow = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
                const validColumn = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
                return [
                    check('piece').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Piece'))
                        .isIn(validPiece).withMessage(messages.checkIfValidEnum('Piece', validPiece)),
                    check('position_raw').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Raw Position'))
                        .isIn(validRow).withMessage(messages.checkIfValidEnum('Raw Position', validRow)),
                    check('position_col').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Column Position'))
                        .isIn(validColumn).withMessage(messages.checkIfValidEnum('Column Position', validColumn))
                ];

            default:
                return [];
        }
    }
}
