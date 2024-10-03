import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0 ">
            <div className="about-section">
              <h5 className="text-uppercase">Giới Thiệu về Thi Nail</h5>
              <p className="about-text">
                Chúng tôi cam kết giúp bạn vượt qua kỳ thi chứng chỉ nail một cách dễ dàng. 
                Nền tảng của chúng tôi cung cấp các bài kiểm tra thực hành toàn diện, mẹo học tập, 
                và cộng đồng hỗ trợ để hướng dẫn bạn trên mọi bước đi.
              </p>
            </div>
          </Col>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <div className="contact-section p-3 rounded">
              <h5 className="text-uppercase">Liên Hệ</h5>
              <ul className="list-unstyled contact-list">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
                    <a href="mailto:info@nailcertification.com" className="text-light">Email: info@nailcertification.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faFacebook} className="contact-icon" /> 
                    <a href="https://facebook.com/nailcertification" className="text-light">Facebook: Nail Certification</a>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom text-center p-3">
        © 2024 Thi Nail All rights reserved :    
        <a className="text-light mx-2" href="https://thinail.com/">thinail.com</a>
        <span className="mx-2">|</span>
        <a className="text-light ms-2" href="/terms-of-service">Điều Khoản Dịch vụ</a>
      </div>
    </footer>
  );
};

export default Footer;
