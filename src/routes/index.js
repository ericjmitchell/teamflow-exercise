const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler')

const { getWelcome, getAllWelcomes, saveWelcome, deleteWelcome } = require('../controllers/hello')

router.get('/', asyncHandler(getAllWelcomes))

router.get('/:dataId', asyncHandler(getWelcome))

router.post('/:dataId?', asyncHandler(saveWelcome))

router.delete('/:dataId', asyncHandler(deleteWelcome))

module.exports = router
