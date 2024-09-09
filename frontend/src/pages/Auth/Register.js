import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { register } from '../../services/api';
import './register.css'; // Thêm file CSS tùy chỉnh

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError(null);
        setPasswordError(null);
        setError(null);

        if (password !== confirmPassword) {
            setPasswordError('Mật khẩu không khớp.');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError('Email không hợp lệ.');
            return;
        }

        try {
            await register({ firstName, lastName, email, password });
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError('Email đã được sử dụng.');
            } else {
                setError('Đăng ký thất bại. Vui lòng thử lại.');
            }
        }
    };

    return (
        <Container className="register-container min-vh-100">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card className="p-5 shadow-lg border-0 register-card">
                        <h2 className="text-center mb-4 register-title">Tạo Tài Khoản</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formFirstName" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder="Họ"
                                            required
                                            className="rounded-pill"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formLastName" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder="Tên"
                                            required
                                            className="rounded-pill"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email"
                                    isInvalid={!!emailError}
                                    required
                                    className="rounded-pill"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {emailError}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Mật khẩu"
                                    required
                                    className="rounded-pill"
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Xác nhận mật khẩu"
                                    isInvalid={!!passwordError}
                                    required
                                    className="rounded-pill"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {passwordError}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 rounded-pill register-btn">
                                Đăng Ký
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
