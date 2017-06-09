import mongoose from 'mongoose'

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://localhost/seshdb')
  mongoose.connection
    .once('open', () => console.log('Database connected'))
    .on('error', err => console.error(err))
}