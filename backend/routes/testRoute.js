const express = require('express');
const { getTests, getTest, submitTest, getAllQuestions } = require('../controllers/testController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/',auth, getTests);
router.get('/:id', auth, getTest);
router.post('/:id/submit', auth, submitTest);
router.get('/questions/all',auth, getAllQuestions); // Thêm route này

module.exports = router;
