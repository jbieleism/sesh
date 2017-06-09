import mongoose, { Schema } from 'mongoose'
import Promise from 'bluebird'

const GroupSchema = new Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  about: { type: String, required: true },
}, { timestamps: true })

GroupSchema.statics.addSesh = async function(id, args) {

  const Sesh = mongoose.model('Sesh')
  const group = await this.findById(id)
  const sesh = new Sesh({ ...args, group })
  group.seshes.push(sesh)
  const result = await Promise.all([ sesh.save(), group.save() ])

}

export default mongoose.model('Group', GroupSchema)