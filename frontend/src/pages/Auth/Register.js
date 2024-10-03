import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { register } from "../../services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EnvelopeCheckFill } from 'react-bootstrap-icons';
import "./register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Trạng thái hiển thị mật khẩu
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Trạng thái hiển thị mật khẩu xác nhận
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isAgree, setIsAgree] = useState(false); // Trạng thái checkbox
  const [isSubmitting, setIsSubmitting] = useState(false); // Trạng thái nút Đăng Ký
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

    // Kiểm tra nếu mật khẩu ít hơn 8 ký tự
    if (password.length < 8) {
      setPasswordError("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Mật khẩu không khớp.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Email không hợp lệ.");
      return;
    }

    setIsSubmitting(true); // Disable nút khi đăng ký

    try {
      await register({ firstName, lastName, email, password });
      setShowConfirmationModal(true);
    } catch (error) {
      setIsSubmitting(false); // Enable nút nếu có lỗi
      if (error.response && error.response.status === 409) {
        setError("Email đã được sử dụng.");
      } else {
        setError("Đăng ký thất bại. Vui lòng thử lại.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    navigate("/login");
  };

  // Điều hướng đến trang Điều khoản dịch vụ
  const handleTermsOfServiceClick = () => {
    navigate("/terms-of-service");
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

              {/* Trường nhập mật khẩu với icon hiển thị/ẩn mật khẩu */}
              <Form.Group controlId="formPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    required
                    className="rounded-pill"
                    isInvalid={!!passwordError}
                  />

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="icon-button d-flex align-items-center mx-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {passwordError}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <InputGroup>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Xác nhận mật khẩu"
                    isInvalid={!!passwordError}
                    required
                    className="rounded-pill"
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="icon-button d-flex align-items-center mx-3"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  
                </InputGroup>
              </Form.Group>
              {/* Điều khoản dịch vụ và checkbox */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      Tôi đã đọc và đồng ý với{" "}
                      <span
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={handleTermsOfServiceClick}
                      >
                        Điều khoản dịch vụ
                      </span>
                    </>
                  }
                  checked={isAgree}
                  onChange={() => setIsAgree(!isAgree)}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-pill register-btn"
                disabled={!isAgree || isSubmitting}
              >
                {isSubmitting ? "Đang Đăng Ký..." : "Đăng Ký"}{" "}
                
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirmationModal} onHide={handleCloseModal} centered className="confirmation-modal">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center">Xác Nhận Email</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center py-4">
        <EnvelopeCheckFill className="text-primary mb-3" size={50} />
        <h4 className="mb-3">Cảm ơn bạn đã đăng ký!</h4>
        <p className="mb-2">
          Chúng tôi đã gửi một email xác nhận đến:
        </p>
        <p className="email-highlight mb-3">{email}</p>
        <p>
          Vui lòng kiểm tra hộp thư đến của bạn và nhấp vào liên kết xác nhận
          để hoàn tất quá trình đăng ký.
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center pb-4">
        <Button variant="primary" onClick={handleCloseModal} className="px-4 py-2">
          Đóng và Đăng nhập
        </Button>
      </Modal.Footer>
    </Modal>



    </Container>
  );
};

export default Register;
