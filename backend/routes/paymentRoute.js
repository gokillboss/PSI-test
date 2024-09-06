const express = require('express');
const router = express.Router();
const { createCheckoutSession, handleStripeWebhook, verifyPurchase } = require('../controllers/paymentController');
const auth = require('../middlewares/authMiddleware');


router.get('/', (req, res) => {
    res.send('Payment route is working!');
});

router.get('/check-purchase', auth, verifyPurchase);
router.post('/create-checkout-session', auth, createCheckoutSession);

router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    console.log('Received Stripe webhook:', req.body);  // Log received webhook payload
    handleStripeWebhook(req, res);  // Call the actual webhook handler
});




module.exports = router;
