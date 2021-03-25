const Mongoose = require('mongoose')
const dataSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  }
})

module.exports = {
  Data: Mongoose.model('Data', dataSchema, 'data')
}
