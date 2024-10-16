const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, updatePassword } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });



router.get('/', (req, res) => {
    res.send('User route is working!');
});


router.get('/profile', auth, getUserProfile);
router.post('/profile', auth, updateUserProfile);
router.post('/updatePassword', auth, updatePassword);



module.exports = router;
