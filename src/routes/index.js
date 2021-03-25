const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler')

const { getWelcome } = require('../controllers/hello')

router.get('/', asyncHandler(getWelcome))

module.exports = router
