const express = require('express');
const router = express.Router();
const { createCheckoutSession, handleStripeWebhook, verifyPurchase } = require('../controllers/paymentController');
const auth = require('../middlewares/authMiddleware');

// This route is just a test route to ensure the route is working.
router.get('/', (req, res) => {
    res.send('Payment route is working!');
});

// Route to check if a user has purchased a specific quiz
router.get('/check-purchase', auth, verifyPurchase);

// Route to create a Stripe checkout session
router.post('/create-checkout-session', auth, createCheckoutSession);

// Stripe webhook handler (do not use auth middleware here)
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    console.log('Received Stripe webhook:', req.body);  // Log received webhook payload
    handleStripeWebhook(req, res);  // Call the actual webhook handler
});




module.exports = router;
