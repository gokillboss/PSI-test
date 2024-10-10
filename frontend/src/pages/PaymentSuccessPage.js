
import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Extract session_id from the URL
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get("session_id");

        // Update the backend to grant access to the quiz and save payment details
        if (sessionId) {
            console.log("Payment successful! Session ID:", sessionId)
        }
    }, []);

    const handleViewQuizzes = () => {
        navigate("/quizzes");
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <h1 className="mb-4">Payment Successful</h1>
                    <p className="lead">Thank you for your purchase! Your payment was processed successfully.</p>
                    <p className="mb-4">You can now access your quiz or browse other quizzes.</p>
                    <Button variant="primary" onClick={handleViewQuizzes} className="mr-2">
                        View Quizzes
                    </Button>
                    <Button variant="secondary" onClick={handleGoHome}>
                        Go to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentSuccessPage;
