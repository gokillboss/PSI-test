import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import nailExamImage from '../assets/nail-exam.jpg';
import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quizzes');
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Đề Thi Nail | Đề Thi Nail Mới Nhất| Đề thì nail 2024</title>
                <meta name="description" content="Đề thi chứng chỉ nail với các đề thi mới nhất năm 2024. Cập nhật liên tục đề thi lý thuyết nails 2024. Luyện thi thử bằng nail." />
                <meta name="keywords" content="đề thi nail, bằng nail, đề thi nail California, đề thi nail mới nhất, đề thi nail 2024, trắc nghiệm nails, luyện thi nails" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Đề Thi Nail",
                      "description": "Luyện thi chứng chỉ nail với các đề thi mới nhất từ California và toàn Mỹ. Cập nhật liên tục đề thi lý thuyết nails 2024.",
                      "url": "https://thinail.com",
                      "keywords": "đề thi nail, bằng nail, đề thi nail California, đề thi nail mới nhất, đề thi nail 2024",
                      "publisher": {
                        "@type": "Invidual",
                        "name": "Nail Certification Exam Prep"
                      }
                    }
                    `}
                </script>
            </Helmet>

            <Container className="homepage-container mb-5">
                <Row className="align-items-center homepage-hero">
                    <Col md={6} className="text-md-left">
                        <h1 className="homepage-title mb-4">Luyện Thi Chứng Chỉ Nail</h1>
                        <p className="lead mb-4">Chuẩn bị cho kỳ thi với các đề thi trắc nghiệm mới nhất từ California và toàn Mỹ.</p>
                        <Button variant="primary" size="lg" className="mb-4" onClick={handleStartQuiz}>
                            Bắt Đầu Luyện Tập Ngay
                        </Button>
                    </Col>
                    <Col md={6}>
                        <img src={nailExamImage} alt="Thi chứng chỉ nail" className="img-fluid rounded homepage-image" />
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Đề Thi Mới Nhất</Card.Title>
                                <Card.Text>Cập nhật liên tục các đề thi từ California và các tiểu bang khác.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Luyện Tập Miễn Phí</Card.Title>
                                <Card.Text>Truy cập không giới hạn vào các bài thi trắc nghiệm để nâng cao kỹ năng.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 homepage-card">
                            <Card.Body>
                                <Card.Title>Theo Dõi Tiến Độ</Card.Title>
                                <Card.Text>Xem báo cáo chi tiết về quá trình học tập và cải thiện của bạn.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col>
                        <h2 className="homepage-section-title">Thi Lý Thuyết Nails Tại California</h2>
                        <p className="homepage-text">
                            Thi lý thuyết nails là yêu cầu bắt buộc để được cấp bằng hành nghề làm nails tại California. Sau khi hoàn thành khóa học 400 giờ, bạn phải vượt qua bài kiểm tra viết để được cấp bằng. Hiện nay, bài thi thực hành không còn bắt buộc.
                        </p>
                        <p className="homepage-text">
                            Có hiệu lực từ ngày 1 tháng 1 năm 2022, kỳ thi thực hành không còn bắt buộc đối với tất cả các loại giấy phép. Các ứng viên chỉ cần vượt qua kỳ thi viết để được cấp phép. Sau khi đơn đăng ký dự thi được Hội đồng chấp thuận, một sổ tay PSI sẽ được gửi cho ứng viên. Ứng viên sẽ lên lịch thi viết tại thời điểm và địa điểm PSI mà họ lựa chọn.
                        </p>
                        <p className="homepage-text">
                            Sau khi đơn đăng ký thi được hội đồng Barbering of Board and Cosmetology phê duyệt, sổ tay PSI sẽ được gửi cho thí sinh. Thí sinh sẽ lên lịch thi viết vào thời gian và địa điểm PSI mà họ lựa chọn.
                        </p>
                    </Col>
                </Row>

                <Row className="my-5">
                    <h2 className="homepage-section-title">Cấu trúc đề thi lý thuyết nails 2024</h2>
                    <p className="homepage-list">
                        Thời gian thi: 90 phút.<br />
                        Câu hỏi trắc nghiệm: 60 câu.<br />
                        Bài pretest: 10 bài.<br />
                    </p>
                    <p>
                        Đề thi tiếng Việt có nhiều câu dịch khá khó hiểu, mời bạn tham khảo thêm{' '}
                        <a
                            href="https://proctor2.psionline.com/media/programs/CADCA/Vietnamese.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="psi-link"
                        >
                            một số thuật ngữ do PSI cung cấp tại đây
                        </a>.
                    </p>
                </Row>
            </Container>
        </HelmetProvider>
    );
};

export default HomePage;
