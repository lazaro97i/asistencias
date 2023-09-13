import mongoose from "mongoose"

const schema = new mongoose.Schema({
  fileNumber: {
    type: Number,
    required: true,
  },
  typeLicense: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  observation: {
    type: String
  },
  userId: {
    type: mongoose.ObjectId,
    required: true
  }
}, { timestamps: true })

export const License = mongoose.model('licencia', schema)