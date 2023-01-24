const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  moreInfoURL: {
    type: String,
    required: true,
  },
});

module.exports = model('Question', questionSchema);
