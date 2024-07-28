const express = require('express');
const router = express.Router();
const testRoutes = require('./testRoute');
const userRoutes = require('./userRoute');
const authRoutes = require('./authRoute');
const categoryRoutes = require('./categoryRoute');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    res.send('API is working!');
});

router.use('/test', testRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);

router.get('/protected', authMiddleware, (req, res) => {
    res.send('You are authorized to access this route!');
});

module.exports = router;
