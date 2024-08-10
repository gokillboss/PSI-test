const express = require('express');
const { getTests, getTestById, createTest, submitTest } = require('../controllers/quizController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to get all quizzes (protected)
router.get('/', auth, getTests);

// Route to get a specific quiz by ID (protected)
router.get('/:id', auth, getTestById);

// Route to create a new quiz (protected)
router.post('/', auth, createTest);

// Route to submit a quiz (protected)
router.post('/:id/submit', auth, submitTest);

module.exports = router;
