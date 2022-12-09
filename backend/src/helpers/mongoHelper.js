const mongoose = require('mongoose');

const isMongoId = (id) => mongoose.Types.ObjectId.isValid(id);

module.exports = {
  isMongoId,
};
