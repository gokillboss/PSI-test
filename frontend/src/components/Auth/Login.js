import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '../../services/api';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            console.error('Login error', error);
        }
    };

    return (
        <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
            <Row className="justify-content-md-center w-100">
                <Col md="6" lg="4">
                    <h2 className="mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-4">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
