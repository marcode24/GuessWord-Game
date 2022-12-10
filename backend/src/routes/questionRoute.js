const { Router } = require('express');
const { validateTopicID } = require('../middlewares/validateMongoId');
const { createQuestion, getRandomQuestion, getQuestionsByTopic } = require('../controllers/questionController');

const router = Router();

router.get('/:topicId', validateTopicID, getQuestionsByTopic);
router.get('/random/:topicId', validateTopicID, getRandomQuestion);

router.post('/:topicId', validateTopicID, createQuestion);

module.exports = router;
