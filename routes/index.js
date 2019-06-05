'use strict'

const router = require('express').Router()
const chessBoardRoute = require('../app/components/chessBoard/chessBoardRoute')

// health check
router.get('/health', (req, res, next) => {
    res.status(200).json({ success: true })
})


router.use('/chessBoard', chessBoardRoute)

module.exports = router
