const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  disability: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  dateAdmitted: {
    type: Date,
    default: Date.now
  },
  medicalHistory: {
    type: String
  },
  photo: {
    type: String // URL to the photo
  }
});

module.exports = mongoose.model('Person', personSchema);