const express = require('express');
const router = express.Router();
const { signup, login, findPassword, resetPassword } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/findPassword', findPassword);
router.post('/resetPassword', resetPassword);

module.exports = router;
