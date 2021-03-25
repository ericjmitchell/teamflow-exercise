require('dotenv').config()
const app = require('./src/app')
const mongoose = require('mongoose')

const port = process.env.PORT || 3001
const connection_url = process.env.CONNECTION_URL || 'mongodb://localhost:27017/teamflow'

mongoose.connect(connection_url, {
  useNewUrlParser: 'true',
  useUnifiedTopology: true
})
mongoose.connection.on('error', err => {
  console.log('err', err)
})
mongoose.connection.on('connected', (err, res) => {
  if (err) {
    console.error(err)
  }
  console.log('mongoose is connected')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
