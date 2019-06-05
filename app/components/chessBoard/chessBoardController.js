'use strict'

module.exports = {
  getPossibleMoves: async (req, res) => {
    try {
      const piece = req.body.piece.toLowerCase();
      const position_row = req.body.position_raw;
      const position_col = req.body.position_col;
      let possibleMoves = [];

      switch (piece) {
        case "king":
          break;
        case "queen":
          break;
        case "bishop":
          break;
        case "horse":
          break;
        case "rook":
          break;
        case "pawn":
          break;
      }

      helpers.createResponse(res, constants.SUCCESS,
        messages.POSIBLE_MOVE_FOR_FROM(piece,
            (`${position_row}${position_col}`)), {
          data: possibleMoves
        })

    } catch (e) {
      console.error(__filename, 'getPossibleMoves', e.stack)
      helpers.createResponse(res, constants.INTERNAL_SERVER_ERROR,
        messages.SERVER_ERROR_MESSAGE, {})
      return
    }
  }
}
