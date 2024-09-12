const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');
const Quiz = require('../models/quizModel');
require('dotenv').config();

exports.createCheckoutSession = async (req, res) => {
    const { quizId } = req.body;

    try {
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: quiz.title,
                    },
                    unit_amount: quiz.price * 100, // Stripe expects the amount in cents
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/quizzes`,
            metadata: {
                userId: req.user.id, // Attach the user ID to the metadata
                quizId: quizId,
            },
        });

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error.message);
        res.status(500).json({ message: 'Server error creating checkout session' });
    }
};





// exports.handleStripeWebhook = async (req, res) => {
//     const sig = req.headers['stripe-signature'];

//     let event;

//     try {
//         console.log('req.body:', req.body);
//         console.log('Webhook Key:', process.env.STRIPE_WEBHOOK_SECRET);
//         event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         console.error('Webhook signature verification failed:', err.message);
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     if (event.type === 'checkout.session.completed') {
//         const session = event.data.object;

//         const userId = session.metadata.userId;
//         const quizId = session.metadata.quizId;

//         try {
//             // Create a transaction record
//             const transaction = new Transaction({
//                 userId: userId,
//                 quizId: quizId,
//                 amount: session.amount_total / 100,  // Stripe amount is in cents
//                 transactionDate: new Date()
//             });

//             await transaction.save();
//             res.status(200).json({ received: true });
//         } catch (error) {
//             console.error('Error processing webhook:', error.message);
//             res.status(500).send(`Server error: ${error.message}`);
//         }
//     } else {
//         res.status(400).send('Unhandled event type');
//     }
// };


exports.verifyPurchase = async (req, res) => {
    try {
        console.log('kiểm tra thanh toán được gọi')
        const userId = req.user ? req.user.id : null;  // Use req.user.id as set by the middleware
        const quizId = req.query.quizId;

        if (!quizId) {
            return res.status(400).json({ message: "Quiz ID is required" });
        }

        // Check if there's a transaction for this user and quiz
        const transaction = await Transaction.findOne({ userId, quizId });
        console.log('Transaction:', transaction);
        if (transaction) {
            return res.status(200).json({
                purchased: true,
                transactionId: transaction._id  // Return the transaction ID
            });
        } else {
            return res.status(200).json({ purchased: false });
        }
    } catch (error) {
        console.error('Error verifying purchase:', error.message);
        res.status(500).json({ message: 'Server error verifying purchase' });
    }
};



exports.handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;

            // Lưu giao dịch vào database
            try {
                const transaction = new Transaction({
                    userId: session.metadata.userId,
                    quizId: session.metadata.quizId,
                    amount: session.amount_total / 100, // Stripe trả về số tiền ở dạng cents
                    transactionDate: new Date()
                });

                await transaction.save();

                console.log('Transaction saved successfully');
            } catch (err) {
                console.error('Error saving transaction:', err.message);
            }
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send();
};