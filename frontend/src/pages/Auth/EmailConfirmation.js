import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { confirmEmail } from "../../services/api";
import "./EmailConfirmation.css"; // import the CSS file

const EmailConfirmation = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await confirmEmail(token);
        setMessage(response.data.message);
        setError(false);
      } catch (error) {
        setMessage("Email confirmation failed. Please try again.");
        setError(true);
      }
    };
    verifyEmail();
  }, [token]);

  return (
    <Container className="email-confirmation-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="email-confirmation-card">
            <Card.Body className="d-flex flex-column align-items-center">
              <Alert
                variant={error ? "danger" : "success"}
                className="email-confirmation-alert"
              >
                {message}
              </Alert>
              <Button
                variant="primary"
                onClick={handleLoginRedirect}
                className="email-confirmation-button"
              >
                Go to Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailConfirmation;
