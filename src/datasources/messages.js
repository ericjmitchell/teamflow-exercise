const { Message } = require('./models/messages')

const getMessagesByMeetingIdDS = async (id) => {
  return Message.find({ meetingId: id });
}

const getMessagesByClientIdDS = async (clientId, since) => {
  return Message.find({ 
    sourceClientId: clientId,
    createdAt: { $gte: since }
   });
}

const getAllMessageDS = async () => {
  return Message.find({})
}

const saveMessageDS = async (saveMessage) => {
  message = new Message(saveMessage)

  return message.save()
}

const deleteMessageDS = async (id) => {
  return Message.deleteOne({ _id: id})
}

module.exports = {
  getMessagesByMeetingIdDS,
  getMessagesByClientIdDS,
  getAllMessageDS,
  saveMessageDS,
  deleteMessageDS
}
