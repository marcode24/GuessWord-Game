const { Router } = require('express');
const { validateCategoryID } = require('../middlewares/validateMongoId');
const { createTopic } = require('../controllers/topicController');

const router = Router();

router.post('/:categoryId', [validateCategoryID], createTopic);

module.exports = router;
