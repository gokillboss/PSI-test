const express = require('express');
const router = express.Router();
const { getAllTests, getTestById, submitTestResults } = require('../controllers/testController');

router.get('/', getAllTests);
router.get('/:id', getTestById);
router.post('/:id/submit', submitTestResults);

module.exports = router;
