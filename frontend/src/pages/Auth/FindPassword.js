import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { findPassword } from '../../services/api'; // API kết nối với backend

const FindPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await findPassword({ email }); // Chỉ tìm theo email
            if (response.data.success) {
                setSuccessMessage('Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư.');
                setErrorMessage(null);
            } else {
                setErrorMessage('Không tìm thấy tài khoản. Vui lòng thử lại.');
                setSuccessMessage(null);
            }
        } catch (error) {
            setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
            setSuccessMessage(null);
            console.error('Find Password Error:', error);
        }
    };

    return (
        <Container className="min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="w-100">
                <Col md="6" lg="4" className="mx-auto">
                    <h2 className="text-center mb-4">Quên Mật Khẩu</h2>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email"
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

export default FindPassword;
