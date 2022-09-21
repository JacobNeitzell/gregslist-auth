import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId
export const JobSchema = new Schema({
  company: { type: String, required: true, minlength: 3, maxlength: 200 },
  jobTitle: { type: String, required: true, minlength: 3, maxlength: 200 },
  hours: { type: Number, required: true, min: 0, max: 0 },
  rate: { type: Number, required: true, min: 0, max: 0 },
  description: { type: String, default: '' },
  clientId: { type: ObjectId, required: true, ref: 'Account' }
})
