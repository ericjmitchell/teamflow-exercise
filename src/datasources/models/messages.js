const Mongoose = require('mongoose')
const messageSchema = new Mongoose.Schema({
  sourceClientId: {
    type: String,
    required: true
  },
  meetingId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},
{ timestamps: true })

module.exports = {
  Message: Mongoose.model('Message', messageSchema, 'messages')
}
