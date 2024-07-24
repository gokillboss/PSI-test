const express = require('express');
const router = express.Router();    
const test = require('./testRoute')
const user = require('./userRoute')
const auth = require('./authRoute')
const result = require('./resultRoute')
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', (req, res) => {
    res.send('API is working!');
});

router.use('/test', test);
router.use('/user', user);
router.use('/auth', auth);
router.use('/result', result);

router.get('/protected', authMiddleware, (req, res) => {
    res.send('You are authorized to access this route!');
});




module.exports = router;