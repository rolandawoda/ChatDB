const mongoose = require('mongoose');

const config = require('./index.js');

const CONNECTION_URL = process.env.MONGODB_URI || `mongodb+srv://${config.db.username}:${config.db.password}@chat.tfkiv.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
