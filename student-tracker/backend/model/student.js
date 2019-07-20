const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  class: {
    type: String
  },
  gender: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', schema)