const express = require('express');
const { getTests, getTestById, createTest, submitTest } = require('../controllers/quizController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Quiz route is working!');
});

router.get('/', auth, getTests);
router.get('/:id', auth, getTestById);
router.post('/', auth, createTest);
router.post('/:id/submit', auth, submitTest);

module.exports = router;
