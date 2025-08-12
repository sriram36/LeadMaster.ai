const express = require('express');
const router = express.Router();
const { getQuestions, submitExam } = require('../controllers/examController');
const auth = require('../middleware/auth');

router.get('/questions', auth, getQuestions);
router.post('/submit', auth, submitExam);

module.exports = router;
