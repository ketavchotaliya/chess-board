'use strict'

const router = express.Router();
// validator
const chessBoardValidator = require('./chessBoardValidator');

router.post('/', [ chessBoardValidator.chessBoardRouteValidate('input_validation'),
    chessBoardValidator.checkValidationResult ], (req, res, next) => {
    res.send('Response send!')
});

module.exports = router;
