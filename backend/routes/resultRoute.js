const express = require('express');
const router = express.Router();
const { getUserResults } = require('../controllers/resultController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/user/:userId', authMiddleware, getUserResults);

module.exports = router;
