import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getQuizzes, checkQuizPurchase } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const createCheckoutSession = require('../../services/api').createCheckoutSession;

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [purchasedQuizzes, setPurchasedQuizzes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await getQuizzes();
                setQuizzes(response.data);

                const purchasedStatus = {};
                for (const quiz of response.data) {
                    if (quiz.price > 0) {
                        const purchaseResponse = await checkQuizPurchase(quiz._id);
                        const isPurchased = purchaseResponse.purchased;
                        purchasedStatus[quiz._id] = isPurchased;
                    }
                }
                setPurchasedQuizzes(purchasedStatus);
            } catch (error) {
                console.error('Error fetching quizzes or purchase data', error);
            }
        };

        fetchQuizzes();
    }, []);

    const handleStartTest = (id) => {
        navigate(`/quizzes/${id}`);
    };

    const handlePayment = async (id) => {

        try {

            const response = await createCheckoutSession(id);
            const { sessionId } = response;
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (!error) {
                console.log('Redirected to Stripe checkout');

            } else {
                console.error('Stripe checkout failed', error);
            }
        } catch (error) {
            console.error('Error creating checkout session', error);
        }
    };


    return (
        <Container>


            <h2 className="my-4">Available Quizzes</h2>
            <Row>
                {quizzes.map(quiz => (
                    <Col key={quiz._id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {quiz.title} {quiz.price > 0 && <span>(${quiz.price})</span>}
                                </Card.Title>
                                <Card.Text>{quiz.description}</Card.Text>

                                {quiz.price === 0 ? (
                                    <Button
                                        variant="primary"
                                        onClick={() => handleStartTest(quiz._id)}
                                    >
                                        Start Test
                                    </Button>
                                ) : (
                                    purchasedQuizzes[quiz._id] ? (
                                        <Button
                                            variant="primary"
                                            onClick={() => handleStartTest(quiz._id)}
                                        >
                                            Start Test
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="success"
                                            onClick={() => handlePayment(quiz._id)}
                                        >
                                            Pay
                                        </Button>
                                    )
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Quizzes;
