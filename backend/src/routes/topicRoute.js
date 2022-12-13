const { Router } = require('express');
const { validateCategoryID } = require('../middlewares/validateMongoId');
const { createTopic, getAllTopics } = require('../controllers/topicController');

const router = Router();

router.get('/', getAllTopics);

router.post('/:categoryId', [validateCategoryID], createTopic);

module.exports = router;
