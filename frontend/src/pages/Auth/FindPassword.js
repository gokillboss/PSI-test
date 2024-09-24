import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { findPassword } from "../../services/api";
import { Link } from "react-router-dom";
import "./findPassword.css";

const FindPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [maskedEmail, setMaskedEmail] = useState("");
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Trạng thái đang xử lý

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    return `${name[0]}*****@${domain}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Nếu đang xử lý yêu cầu, không gửi thêm request

    setIsSubmitting(true); // Bắt đầu xử lý yêu cầu, khóa nút
    try {
      const response = await findPassword({ email });
      if (response.data.success) {
        setMaskedEmail(maskEmail(email));
        setSuccessMessage("Yêu cầu đã được gửi thành công.");
        setErrorMessage(null);
        setCanResend(false);
        setTimer(90); // Khóa nút gửi lại trong 90 giây
      } else {
        setErrorMessage("Tài khoản không tồn tại. Vui lòng thử lại.");
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại.");
      setSuccessMessage(null);
      console.error("Find Password Error:", error);
    }
    setIsSubmitting(false); // Hoàn thành yêu cầu, mở lại nút
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimer(90); // Khóa nút gửi lại trong 90 giây
    handleSubmit(new Event("resend")); // Gửi lại email
  };

  return (
    <Container className="min-vh-100  bg-light">
      <Row className="w-100 justify-content-center ">
        <Col md="6" lg="5" className="mx-auto">
          <div className="shadow-lg p-4 bg-white rounded find-password-card">
            <h2 className="text-center mb-4 text-primary">Quên Mật Khẩu</h2>
            {errorMessage && (
              <Alert variant="danger" className="text-center">
                {errorMessage}
              </Alert>
            )}
            {!successMessage ? (
              <Form onSubmit={handleSubmit} className="needs-validation">
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className="text-muted">
                    Nhập địa chỉ email của bạn
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    required
                    className="p-3"
                    style={{ fontSize: "1rem" }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="find-password-btn w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang xử lý..." : "Đặt lại mật khẩu"}
                </Button>
              </Form>
            ) : (
              <div className="text-center">
                <Alert variant="success" className="mt-4">
                  <p>{successMessage}</p>
                  <p>
                    Vui lòng kiểm tra email <strong>{maskedEmail}</strong> để
                    đặt lại mật khẩu.
                  </p>
                  <p>
                    Nếu bạn không nhận được email, hãy kiểm tra thư mục spam
                    hoặc thử gửi lại sau.
                  </p>
                </Alert>
                <Button
                  variant="secondary"
                  onClick={handleResend}
                  disabled={!canResend}
                  className="w-100 p-3"
                >
                  {canResend ? "Gửi lại email" : `Gửi lại sau ${timer} giây`}
                </Button>
                <div className="text-center mt-3">
                  <Link to="/login" className="text-decoration-none">
                    Quay lại trang đăng nhập
                  </Link>
                </div>
                <div className="text-center mt-3">
                  <p>
                    Nếu gặp vấn đề, vui lòng liên hệ{" "}
                    <a
                      href="mailto:support@yourcompany.com"
                      className="text-decoration-none"
                    >
                      support@yourcompany.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FindPassword;
