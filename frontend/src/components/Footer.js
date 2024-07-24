import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are dedicated to helping you pass your nail certification exam with ease. Our platform offers comprehensive practice tests, study tips, and a supportive community to guide you every step of the way.
            </p>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">Home</a>
              </li>
              <li>
                <a href="/quizzes" className="text-dark">Quizzes</a>
              </li>
              <li>
                <a href="/questions" className="text-dark">All Questions</a>
              </li>
              <li>
                <a href="/login" className="text-dark">Login</a>
              </li>
              <li>
                <a href="/register" className="text-dark">Register</a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-dark mb-0">Email: info@nailcertification.com</p>
              </li>
              <li>
                <p className="text-dark mb-0">Phone: +123 456 7890</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-light">
        © 2024 Nail Certification:
        <a className="text-light" href="https://nailcertification.com/"> nailcertification.com</a>
      </div>
    </footer>
  );
};

export default Footer;
