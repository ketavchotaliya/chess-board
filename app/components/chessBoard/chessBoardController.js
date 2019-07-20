// 'use strict';

const PieceFinder = require('./Pieces/PieceFinder');

module.exports = {
  /**
   * @typedef chessMoves
   * @property {string} piece.required
   * @property {string} position_raw.required
   * @property {number} position_col.required
   */
  /**
   * Get possible moves for given pieces
   * @route POST /api/v1/chessBoard
   * @group chessBoard - APIs for finding the possible movements for chess pieces
   * @param {chessMoves.model} chessMoves.body.required - chess piece moves
   * @returns {object} 200 - Ok
   * @returns {object} 404 - Not Found
   * @returns {object} 422 - Unprocessable Entity
   * @returns {object} 500 - Internal server error
   */

  getPossibleMoves: async (req, res) => {
    try {
      const piece = req.body.piece;
      const position_row = req.body.position_raw.toUpperCase();
      const position_col = parseInt(req.body.position_col);

      let possibleMoves = PieceFinder.getPiece(piece).findPosition(
        position_row,
        position_col
      );

      helpers.createResponse(
        res,
        Constants.httpStatusCode().SUCCESS,
        messages.POSIBLE_MOVE_FOR_FROM(piece, `${position_row}${position_col}`),
        {
          data: possibleMoves
        }
      );
    } catch (e) {
      console.error(__filename, 'getPossibleMoves', e.stack);
      helpers.createResponse(
        res,
        Constants.httpStatusCode().INTERNAL_SERVER_ERROR,
        messages.SERVER_ERROR_MESSAGE,
        {}
      );
    }
  }
};
