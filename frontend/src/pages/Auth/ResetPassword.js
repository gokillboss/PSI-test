import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { resetPassword } from '../../services/api';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [passwordError, setPasswordError] = useState(null); // Để kiểm tra độ mạnh của mật khẩu
    const { token } = useParams();
    const navigate = useNavigate();

    // Kiểm tra độ mạnh của mật khẩu (ít nhất 8 ký tự)
    const validatePassword = (password) => {
        if (password.length < 8) {
            setPasswordError('Mật khẩu phải có ít nhất 8 ký tự.');
            return false;
        }
        setPasswordError(null);
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Kiểm tra nếu mật khẩu không khớp
        if (password !== confirmPassword) {
            setErrorMessage('Mật khẩu không khớp.');
            return;
        }

        // Kiểm tra độ mạnh của mật khẩu
        if (!validatePassword(password)) {
            setErrorMessage(null);
            return;
        }

        try {
            await resetPassword(token, { password });
            setSuccessMessage('Mật khẩu đã được cập nhật.');
            setErrorMessage(null);
            setTimeout(() => navigate('/login'), 3000); // Chuyển hướng về trang đăng nhập sau 3 giây
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra. Vui lòng thử lại.');
            setSuccessMessage(null);
        }
    };

    return (
        <Container className="min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="w-100">
                <Col md="6" lg="4" className="mx-auto">
                    <h2 className="text-center mb-4">Đặt lại mật khẩu</h2>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {passwordError && <Alert variant="danger">{passwordError}</Alert>} {/* Hiển thị lỗi mật khẩu không đủ mạnh */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Nhập mật khẩu mới"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Xác nhận mật khẩu"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">Đặt lại mật khẩu</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;
