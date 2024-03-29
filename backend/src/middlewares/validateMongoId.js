const { isMongoId } = require('../helpers/mongoHelper');

const validateCategoryID = (req, res, next) => {
  const { categoryId } = req.params;
  if (categoryId && !isMongoId(categoryId)) {
    return res.status(400).json({
      ok: false,
      msg: 'Must provide a valid category id',
    });
  }
  next();
};

const validateTopicID = (req, res, next) => {
  const { topicId } = req.params;
  if (topicId && !isMongoId(topicId)) {
    return res.status(400).json({
      ok: false,
      msg: 'Must provide a valid topic id',
    });
  }
  next();
};

module.exports = {
  validateCategoryID,
  validateTopicID,
};
