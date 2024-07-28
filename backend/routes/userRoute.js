const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/profile', auth, getUserProfile);
router.post('/profile', auth, upload.single('avatar'), updateUserProfile);

module.exports = router;
