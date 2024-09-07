const express = require('express');
const router = express.Router();
const resetPasswordLimiter = require('../middlewares/rateLimit').resetPasswordLimiter;
const loginLimiter = require('../middlewares/rateLimit').loginLimiter;
const signupLimiter = require('../middlewares/rateLimit').signupLimiter;
const { signup, login, findPassword, resetPassword,confirmEmail } = require('../controllers/authController');

router.get('/', (req, res) => {
    res.send('Auth route is working!');
});


router.post('/signup',signupLimiter, signup);
router.post('/login',loginLimiter, login);
router.get('/confirm/:token', confirmEmail);
router.post('/findPassword', resetPasswordLimiter,findPassword);
router.post('/resetPassword/:token', resetPassword);

module.exports = router;
