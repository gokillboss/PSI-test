const express = require('express');
const router = express.Router();
const { confirmEmail} = require('../controllers/authController');


router.get('/', (req, res) => {
    res.send('Auth route is working!');
});

const { signup, login, findPassword, resetPassword } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/confirm/:token', confirmEmail);
router.post('/findPassword', findPassword);
router.post('/resetPassword', resetPassword);

module.exports = router;
