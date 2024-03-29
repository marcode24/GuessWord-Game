const { Schema, model, SchemaTypes } = require('mongoose');

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  image: {
    type: String,
    default: 'my-default-image.jpg',
  },
  questions: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Question',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Topic', topicSchema);
