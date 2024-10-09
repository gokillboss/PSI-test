import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './Quizzes.css';
import { getQuizzes, checkQuizPurchase, createCheckoutSession } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';


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
            console.error('Lỗi khi tải đề thi hoặc dữ liệu mua hàng:', error);
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
                console.error('Thanh toán Stripe thất bại:', error);
            }
        } catch (error) {
            console.error('Lỗi khi tạo phiên thanh toán:', error);
        }
    };

    return (
        <Container className="quizzes-container my-5">
            {/* Phần Giới Thiệu và Quảng Cáo */}
            {/* <Row className="align-items-center mb-5">
                <h2 className="text-center mb-4">Thông Tin Quan Trọng</h2>
                <p>
                    Theo quy định của State Board, tất cả các ứng viên đều phải vượt qua kỳ thi chính thức để được cấp phép. Các bài thi thử của chúng tôi được thiết kế nhằm giúp bạn chuẩn bị và làm quen với cấu trúc của bài thi.
                    Các bài thi này được xây dựng phù hợp với các yêu cầu hiện tại của State Board, đảm bảo rằng bạn đang ôn tập đúng nội dung cần thiết.
                </p>
                <p>
                    Mục tiêu của chúng tôi là cung cấp cho bạn những công cụ cần thiết để vượt qua kỳ thi của mình. Hãy chắc chắn rằng bạn đã xem xét kỹ các quy định và yêu cầu, vì chúng có thể khác nhau giữa các tiểu bang. Chúc bạn ôn tập tốt và thi thành công!
                </p>
                <p>
                    <strong>Đề thi có phí của chúng tôi bao gồm những câu hỏi chính thức mà có tỷ lệ cao sẽ xuất hiện trong đề thi thật của PSI.</strong> Phí <strong>10$</strong> được tính là cần thiết để duy trì hoạt động của website và cải thiện chất lượng các bài thi thử.
                    <strong>Chúng tôi cam kết mang đến cho bạn trải nghiệm tốt nhất trong quá trình ôn tập và chuẩn bị cho kỳ thi.</strong>
                </p>
            </Row> */}

            {/* Danh Sách Đề Thi */}
            <Row>
                <h2 className="text-center mb-5">Đề Luyện Thi</h2>
                {quizzes.map(quiz => (
                    <Col key={quiz._id} lg={3} md={6} className="mb-4">
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
                                <div className="mt-auto"> {/* Thêm class text-center để căn giữa nội dung */}
                                    {quiz.price === 0 || purchasedQuizzes[quiz._id] ? (
                                        <Button
                                            variant="primary"
                                            onClick={() => handleStartTest(quiz._id)}
                                            className="btn"
                                        >
                                            Bắt Đầu Thi
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="success"
                                            onClick={() => handlePayment(quiz._id)}
                                            className="btn"
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
        </Container>
    );
};

export default Quizzes;
