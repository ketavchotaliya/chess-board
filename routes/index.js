'use strict'

const router = require('express').Router()

// health check
router.get('/health', (req, res, next) => {
  res.status(200).json({ success: true })
})

module.exports = router
