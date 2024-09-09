import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';  // Assuming you will create this CSS file for custom styles

const Header = () => {
    const navigate = useNavigate();

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return !!token;  // Returns true if token exists, false otherwise
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">Thi Nail</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {isAuthenticated() ? (
                            <>
                                <Nav.Link as={Link} to="/quizzes" className="custom-link">Quizzes</Nav.Link>
                                <Nav.Link as={Link} to="/profile" className="custom-link">Profile</Nav.Link>
                                <Button variant="outline-light" onClick={handleLogout} className="custom-button">Logout</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="custom-link">Đăng nhập</Nav.Link>
                                <Nav.Link as={Link} to="/register" className="custom-link">Đăng ký</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
