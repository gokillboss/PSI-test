import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { login } from '../../services/api';
import { jwtDecode } from 'jwt-decode';
import './login.css'; // Thêm file CSS tùy chỉnh

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Thêm state để hiển thị lỗi nếu đăng nhập không thành công
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            const user = jwtDecode(token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/'); // Redirect to home page or any other page
            window.location.reload(); // Refresh to update header state
        } catch (error) {
            setError('Sai tài khoản hoặc mật khẩu.'); // Cập nhật thông báo lỗi
            console.error('Login error', error);
        }
    };

    return (
        <Container fluid className="d-flex mt-5 justify-content-center min-vh-100">
            <Row className="justify-content-md-center w-100">
                <Col md="6" lg="4">
                    <Card className="p-4 shadow-lg login-card">
                        <h2 className="text-center mb-4 login-title">Đăng Nhập</h2>
                        <div className='d-flex justify-content-center align-items-center '>
                            {error && <p style={{color:'red'}}>{error}</p>}
                        </div>
                       
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email"
                                    required
                                    className="rounded-pill"
                                />
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

                            <Button variant="primary" type="submit" className="w-100 rounded-pill login-btn mt-3">
                                Đăng Nhập
                            </Button>
                        </Form>

                        <div className="d-flex justify-content-between mt-3">
                            <Link to="/findPassword" className="text-decoration-none">
                                Quên mật khẩu?
                            </Link>
                            <Link to="/register" className="text-decoration-none">
                                Đăng ký
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
