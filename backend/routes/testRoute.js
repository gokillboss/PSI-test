const express = require('express');
const { getTests, getTestById, createTest, submitTest } = require('../controllers/testController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', auth, getTests); // Apply the auth middleware
router.get('/:id', auth, getTestById); // Apply the auth middleware
router.post('/', auth, createTest); // Apply the auth middleware
router.post('/:id/submit', auth, submitTest); // Apply the auth middleware

module.exports = router;
