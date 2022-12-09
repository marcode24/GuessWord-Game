const { Schema, model } = require('mongoose');

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'my-default-image.jpg',
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Topic', topicSchema);
