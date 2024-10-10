import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Thêm biểu tượng

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const sessionId = params.get("session_id");

        if (sessionId) {
            console.log("Payment successful! Session ID:", sessionId);
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
            <Row className="justify-content-center text-center">
                <Col md={8} lg={6}>
                    <div className="success-icon mb-4">
                        <FaCheckCircle size={80} color="green" />
                    </div>
                    <h1 className="mb-3" style={{ fontWeight: "bold", color: "#2C3E50" }}>
                        Payment Successful
                    </h1>
                    <p className="lead mb-4" style={{ fontSize: "18px", color: "#34495E" }}>
                        Thank you for your purchase! Your payment was processed successfully.
                    </p>
                    <p className="mb-4" style={{ fontSize: "16px", color: "#7F8C8D" }}>
                        You can now access your quiz or browse other quizzes.
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleViewQuizzes}
                        style={{
                            marginRight: "10px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            backgroundColor: "#3498DB",
                            borderColor: "#3498DB",
                            transition: "0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980B9")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498DB")}
                    >
                        View Quizzes
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={handleGoHome}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            backgroundColor: "#95A5A6",
                            borderColor: "#95A5A6",
                            transition: "0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#7F8C8D")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#95A5A6")}
                    >
                        Go to Home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentSuccessPage;
