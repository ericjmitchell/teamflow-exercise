const express = require('express')
const router = express.Router()

const asyncHandler = require('express-async-handler')

const { getMessagesByMeetingId, getAllMessages, saveMessage, deleteMessage } = require('../controllers/messages')

router.get('/', asyncHandler(getAllMessages))

router.get('/:meetingId', asyncHandler(getMessagesByMeetingId))

router.post('/', asyncHandler(saveMessage))

router.delete('/:dataId', asyncHandler(deleteMessage))

module.exports = router
