import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  about: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  password: { type: String, required: true },
  username: { type: String, required: true },
}, { timestamps: true })

export default mongoose.model('User', UserSchema)