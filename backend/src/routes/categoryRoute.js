const { Router } = require('express');
const { create } = require('../controllers/categoryController');

const router = Router();

router.post('/', create);

module.exports = router;
