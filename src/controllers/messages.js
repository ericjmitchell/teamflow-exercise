const moment = require('moment')

const { getMessagesByMeetingIdDS, getMessagesByClientIdDS, getAllMessageDS, saveMessageDS, deleteMessageDS } = require('../datasources/messages')

const getMessagesByMeetingId = async (req, res) => {
  const { meetingId } = req.params
  const messages = await getMessagesByMeetingIdDS(meetingId)

  if (!messages) {
    res.status(404)
    throw new Error(`Data ${messageId} not found!`)
  }

  res.json(messages)
}

const getAllMessages = async (req, res) => {
  const message = await getAllMessageDS()

  res.json(message)
}

const saveMessage = async (req, res) => {
  const { body: message } = req

  // Retrieve messages less than 1 minutes ago
  const latestMessages = await getMessagesByClientIdDS(message.sourceClientId, moment().subtract(1, 'minute'))

  if (latestMessages.length >= 2) {
    throw { status: 429, message: 'Rate limit of 2 per minute'}
  }
  // Send rate limit message

  const result = await saveMessageDS(message)

  res.json(result)
}

const deleteMessage = async (req, res) => {
  const { messageId } = req.params
  const result = await deleteMessageDS(messageId)

  res.json(result)
}

module.exports = {
  getMessagesByMeetingId,
  getAllMessages,
  saveMessage,
  deleteMessage
}
