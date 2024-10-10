import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { getQuizzes, checkQuizPurchase, createCheckoutSession } from '../services/api';
import './ExamPage.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const ExamPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [purchasedQuizzes, setPurchasedQuizzes] = useState({});
    const navigate = useNavigate();

    const fetchQuizzes = useCallback(async () => {
        try {
            const response = await getQuizzes();
            setQuizzes(response.data);

            const purchasedStatus = {};
            await Promise.all(
                response.data.map(async (quiz) => {
                    if (quiz.price > 0) {
                        const purchaseResponse = await checkQuizPurchase(quiz._id);
                        if (purchaseResponse) {
                            purchasedStatus[quiz._id] = purchaseResponse.purchased;
                        }
                    }
                })
            );
            setPurchasedQuizzes(purchasedStatus);
        } catch (error) {
            console.error('Lỗi khi tải đề thi hoặc dữ liệu mua hàng:', error);
        }
    }, []);

    useEffect(() => {
        fetchQuizzes();
    }, [fetchQuizzes]);

    const handlePayment = async (id) => {
        try {
            const response = await createCheckoutSession(id);
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId: response.sessionId });
            if (error) {
                console.error('Thanh toán Stripe thất bại:', error);
            }
        } catch (error) {
            console.error('Lỗi khi tạo phiên thanh toán:', error);
        }
    };

    const handleStartTest = (id) => {
        navigate(`/exam/${id}`);
    };

    return (
        <Container fluid className="exam-page-container py-5">
            <Row className='g-4'>
                {/* Phần giới thiệu bài thi */}
                <Col lg={6} md={12} className='align-items-center'>
                    <h3>Giới thiệu và Quy định của Bài Thi</h3>
                    <p>
                        Chào mừng bạn đến với trang thi thử. Trước khi bắt đầu, vui lòng đọc kỹ các quy định:
                    </p>
                    <ul>
                        <li>Bài thi gồm 70 câu hỏi, bạn có 90 phút để hoàn thành.</li>
                        <li>Bạn có thể đánh dấu các câu hỏi để xem lại sau.</li>
                        <li>Có thể quay lại các câu hỏi trước hoặc nhảy đến câu hỏi bất kỳ từ bảng điều khiển.</li>
                        <li>Nhấn nút "Nộp bài" để hoàn thành bài thi.</li>
                    </ul>
                    <p>
                        Vui lòng chọn một bài thi từ danh sách dưới đây và bắt đầu khi bạn đã sẵn sàng.
                    </p>
                </Col>

                {/* Phần hiển thị danh sách các bài thi */}
                <Col lg={6} md={12}>
                    <Row className='g-4'>
                        {quizzes.map((quiz) => (
                            <Col key={quiz._id} lg={6} md={12} sm={12} className="quiz-item">
                                <Card className="h-100 exam-quiz-card">
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="mb-3 d-flex justify-content-between align-items-center">
                                            <span>{quiz.title}</span>
                                            {quiz.price > 0 && (
                                                <Badge bg="info" pill>
                                                    ${quiz.price}
                                                </Badge>
                                            )}
                                        </Card.Title>
                                        <Card.Text className="flex-grow-1">{quiz.description}</Card.Text>
                                        <div className="mt-3">
                                            {quiz.price === 0 || purchasedQuizzes[quiz._id] ? (
                                                <Button
                                                    variant="primary"
                                                    onClick={() => handleStartTest(quiz._id)}
                                                    className="w-100 exam-button exam-button-primary"
                                                >
                                                    Bắt Đầu Thi
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="success"
                                                    onClick={() => handlePayment(quiz._id)}
                                                    className="w-100 exam-button exam-button-success"
                                                >
                                                    Mua Đề Thi
                                                </Button>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ExamPage;
