const { Router } = require('express');
const { validateTopicID } = require('../middlewares/validateMongoId');
const { createQuestion } = require('../controllers/questionController');

const router = Router();

router.post('/:topicId', validateTopicID, createQuestion);

module.exports = router;
