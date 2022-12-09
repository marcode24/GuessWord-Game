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

module.exports = {
  validateCategoryID,
};
