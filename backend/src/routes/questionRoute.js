const { Router } = require('express');
const { validateTopicID } = require('../middlewares/validateMongoId');
const { createQuestion, getRandomQuestion } = require('../controllers/questionController');

const router = Router();

router.get('/:topicId', validateTopicID, getRandomQuestion);

router.post('/:topicId', validateTopicID, createQuestion);

module.exports = router;
