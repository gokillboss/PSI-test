import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './TermOfService.css';

const TermsOfService = () => {
  const navigate = useNavigate(); 

 
  const handleContinue = () => {
    navigate(-1);  // Điều hướng về trang trước
  };

  return (
    <Container className="terms-page my-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm p-4 terms-card">
            <Card.Body>
              <h1 className="text-center mb-4">Điều khoản Dịch vụ</h1>
              <p className="text-muted text-center mb-5">Cập nhật lần cuối: 26/09/2024</p>

              <section>
                <h3>1. Giới thiệu</h3>
                <p>
                  Ứng dụng <strong>Thi Nail</strong> cung cấp nền tảng luyện thi trắc nghiệm trực tuyến với mục tiêu hỗ trợ người dùng trong việc luyện tập và cải thiện kỹ năng. Ứng dụng bao gồm các tính năng như thi thử, kết quả tự động, và hỗ trợ cá nhân hóa nội dung luyện thi.
                </p>
              </section>

              <section>
                <h3>2. Chấp nhận Điều khoản</h3>
                <p>
                  Bằng việc tạo tài khoản và/hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản và điều kiện được liệt kê ở đây. Nếu bạn không đồng ý với bất kỳ phần nào của điều khoản, vui lòng không sử dụng dịch vụ.
                </p>
              </section>

              <section>
                <h3>3. Đăng ký Tài khoản</h3>
                <p>
                  Để sử dụng một số tính năng của ứng dụng, bạn cần tạo một tài khoản. Khi tạo tài khoản, bạn đồng ý:
                </p>
                <ul>
                  <li>Cung cấp thông tin chính xác, đầy đủ và cập nhật.</li>
                  <li>Chịu trách nhiệm bảo mật tài khoản của bạn, bao gồm mật khẩu và các thông tin đăng nhập.</li>
                  <li>Không chia sẻ tài khoản với bất kỳ ai.</li>
                </ul>
              </section>

              <section>
                <h3>4. Thanh toán và Chính sách hoàn tiền</h3>
                <p>
                  Nếu bạn đăng ký các dịch vụ trả phí của chúng tôi, bao gồm các khóa luyện thi cao cấp:
                </p>
                <ul>
                  <li>
                    <strong>Thanh toán:</strong> Bạn đồng ý cung cấp thông tin thanh toán chính xác và đầy đủ khi thực hiện các giao dịch mua.
                  </li>
                  <li>
                    <strong>Hoàn tiền:</strong> Các giao dịch thanh toán không thể hoàn lại sau khi đã hoàn tất, trừ khi được quy định rõ ràng khác trong chính sách hoàn tiền của chúng tôi hoặc yêu cầu theo luật pháp địa phương.
                  </li>
                </ul>
              </section>

              <section>
                <h3>5. Giới hạn Trách nhiệm</h3>
                <p>
                  Ứng dụng được cung cấp "như hiện có" và không có bất kỳ đảm bảo nào về tính khả dụng, độ chính xác hoặc khả năng sử dụng liên tục. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng dịch vụ của chúng tôi.
                </p>
              </section>

              <section>
                <h3>6. Liên hệ</h3>
                <p>
                  Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản Dịch vụ, vui lòng liên hệ với chúng tôi qua email tại{' '}
                  <a href="mailto:support@thinail.com">support@thinail.com</a>.
                </p>
              </section>

              <div className="text-center mt-4">
                <Button variant="primary" onClick={handleContinue}>
                  Tiếp tục
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
