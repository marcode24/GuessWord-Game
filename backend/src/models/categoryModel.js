const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: 'my-default-image.jpg',
  },
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Topic',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Category', categorySchema);
