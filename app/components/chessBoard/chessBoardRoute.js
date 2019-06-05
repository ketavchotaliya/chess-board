'use strict'

const router = express.Router();
// validator
const chessBoardValidator = require('./chessBoardValidator');
const chessBoardController = require('./chessBoardController');

router.post('/', [ chessBoardValidator.chessBoardRouteValidate('input_validation'),
    chessBoardValidator.checkValidationResult ], (req, res, next) => {
    chessBoardController.getPossibleMoves(req, res)
});

module.exports = router;
