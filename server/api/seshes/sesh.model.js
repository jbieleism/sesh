import mongoose, { Schema } from 'mongoose'

const SeshSchema = new Schema({

  category: { type: String, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    address: { type: String, required: false },
    coordinates: [{ type: Number, required: false }]
  },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },

}, { timestamps: true })

export default mongoose.model('Sesh', SeshSchema)