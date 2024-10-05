import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { getQuizzes, checkQuizPurchase, createCheckoutSession } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import './Quizzes.css'; // Tạo file CSS riêng cho component này

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [purchasedQuizzes, setPurchasedQuizzes] = useState({});
    const navigate = useNavigate();

    const fetchQuizzes = useCallback(async () => {
        try {
            const response = await getQuizzes();
            setQuizzes(response.data);

            const purchasedStatus = {};
            await Promise.all(response.data.map(async (quiz) => {
                if (quiz.price > 0) {
                    const purchaseResponse = await checkQuizPurchase(quiz._id);
                    if (purchaseResponse) {
                        purchasedStatus[quiz._id] = purchaseResponse.purchased;
                    }
                }
            }));
            setPurchasedQuizzes(purchasedStatus);
        } catch (error) {
            console.error('Error fetching quizzes or purchase data:', error);
        }
    }, []);

    useEffect(() => {
        fetchQuizzes();
    }, [fetchQuizzes]);

    const handleStartTest = (id) => {
        navigate(`/quizzes/${id}`);
    };

    const handlePayment = async (id) => {
        try {
            const response = await createCheckoutSession(id);
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId: response.sessionId });
            if (error) {
                console.error('Stripe checkout failed', error);
            }
        } catch (error) {
            console.error('Error creating checkout session', error);
        }
    };

    return (
        <Container className="quizzes-container">
            <h2 className="text-center my-5">Available Quizzes</h2>
            <Row>
                {quizzes.map(quiz => (
                    <Col key={quiz._id} lg={4} md={6} className="mb-4">
                        <Card className="quiz-card h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3">
                                    {quiz.title}
                                    {quiz.price > 0 && (
                                        <Badge bg="info" className="ms-2">
                                            ${quiz.price}
                                        </Badge>
                                    )}
                                </Card.Title>
                                <Card.Text className="flex-grow-1">{quiz.description}</Card.Text>
                                <div className="mt-auto">
                                    {quiz.price === 0 || purchasedQuizzes[quiz._id] ? (
                                        <Button 
                                            variant="primary" 
                                            onClick={() => handleStartTest(quiz._id)}
                                            className="w-100"
                                        >
                                            Start Test
                                        </Button>
                                    ) : (
                                        <Button 
                                            variant="success" 
                                            onClick={() => handlePayment(quiz._id)}
                                            className="w-100"
                                        >
                                            Purchase
                                        </Button>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Quizzes;