'use strict'

module.exports = {
    getPossibleMoves: async (req, res) => {
        try {
            const piece = req.body.piece.toLowerCase();
            const position_row = req.body.position_raw.toUpperCase();
            const position_col = parseInt(req.body.position_col);
            let possibleMoves = [];

            switch (piece) {
                case "king":
                    possibleMoves = require('./Pieces/King')(position_row, position_col);
                    break;
                case "queen":
                    possibleMoves = require('./Pieces/Queen')(position_row, position_col);
                    break;
                case "bishop":
                    possibleMoves = require('./Pieces/Bishop')(position_row, position_col);
                    break;
                case "horse":
                    possibleMoves = require('./Pieces/Horse')(position_row, position_col);
                    break;
                case "rook":
                    possibleMoves = require('./Pieces/Rook')(position_row, position_col);
                    break;
                case "pawn":
                    possibleMoves = require('./Pieces/Pawn')(position_row, position_col);
                    break;
            }

            helpers.createResponse(res, constants.http_status_code.SUCCESS,
                messages.POSIBLE_MOVE_FOR_FROM(piece,
                    (`${position_row}${position_col}`)), {
                    data: possibleMoves
            });

        } catch (e) {
            console.error(__filename, 'getPossibleMoves', e.stack);
            helpers.createResponse(res, constants.http_status_code.INTERNAL_SERVER_ERROR,
                messages.SERVER_ERROR_MESSAGE, {});
        }
    }
}
