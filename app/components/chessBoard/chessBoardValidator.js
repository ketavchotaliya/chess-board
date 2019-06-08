'use strict';
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = {
    // validate the request and send error response if fail
    checkValidationResult: (req, res, next) => {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            helpers.createResponse(res, Constants.httpStatusCode().UNPROCESSED,
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
                return [
                    check('piece').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Piece'))
                        .isIn(Constants.validPiece()).withMessage(messages.checkIfValidEnum('Piece', Constants.validPiece())),
                    check('position_raw').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Raw Position'))
                        .isIn(Constants.validRow()).withMessage(messages.checkIfValidEnum('Raw Position', Constants.validRow())),
                    check('position_col').isLength({ min: 1 })
                        .withMessage(messages.checkIfRequired('Column Position'))
                        .isIn(Constants.validColumn()).withMessage(messages.checkIfValidEnum('Column Position', Constants.validColumn()))
                ];

            default:
                return [];
        }
    }
}
