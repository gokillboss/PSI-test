const express = require('express');
const router = express.Router();
const { signup, login, confirmEmail} = require('../controllers/authController');


router.get('/', (req, res) => {
    res.send('Auth route is working!');
});


router.post('/signup', signup);
router.post('/login', login);
router.get('/confirm/:token', confirmEmail);

module.exports = router;
