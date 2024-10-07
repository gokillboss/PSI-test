import React, { useState, useEffect } from 'react';
import Question from './Question';
import CountdownClock from './CountdownClock'; // Import CountdownClock
import { Container, Row, Col, ProgressBar, Button, Modal, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../../services/api'; // Import hàm getQuiz để lấy dữ liệu bài thi
import './Exam.css'; // Import file CSS tùy chỉnh

const Exam = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [quiz, setQuiz] = useState(null); // Trạng thái lưu thông tin bài thi
  const [questions, setQuestions] = useState([]); // Câu hỏi cho bài thi
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 phút (5400 giây)
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState(null);

  // Lấy dữ liệu bài thi khi component được mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuiz(id); // Gọi API để lấy thông tin bài thi theo id
        const quizData = response.data;

        // Lấy ngẫu nhiên tối đa 70 câu hỏi từ bài thi
        const shuffledQuestions = quizData.questions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 70); // Lấy 70 câu hoặc ít hơn nếu không đủ

        // Thêm ID mới cho mỗi câu hỏi (ID bắt đầu từ 1 đến 70)
        const questionsWithNewIds = selectedQuestions.map((question, index) => ({
          ...question,
          newId: index + 1, // Thêm thuộc tính newId cho mỗi câu hỏi
        }));

        setQuiz(quizData); // Lưu thông tin bài thi
        setQuestions(questionsWithNewIds); // Lưu danh sách câu hỏi đã chọn với ID mới
      } catch (error) {
        console.error('Error fetching quiz', error);
      }
    };

    fetchQuiz(); // Gọi hàm lấy dữ liệu bài thi
  }, [id]); // Chỉ chạy khi id thay đổi

  // Đếm ngược thời gian
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // Dọn dẹp bộ đếm thời gian khi unmount
  }, []);

  const handleNext = () => {
    if (currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const handleMark = (id) => {
    setMarkedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitTest = () => {
    const correctAnswers = questions.reduce((count, question) => {
      const selectedAnswer = answers[question.newId]; // Sử dụng newId cho câu trả lời của người dùng
      const correctOption = question.options.find((option) => option.isCorrect); // Tìm option đúng trong câu hỏi
      if (correctOption && correctOption.text === selectedAnswer) { // So sánh với câu trả lời đúng
        return count + 1;
      }
      return count;
    }, 0);

    setResultData({
      totalQuestions: questions.length,
      correctAnswers,
      score: ((correctAnswers / questions.length) * 100).toFixed(2),
    });

    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  if (!quiz || questions.length === 0) {
    return <div>Loading...</div>; // Hiển thị "Loading" khi dữ liệu chưa tải xong
  }

  return (
    <Container className="exam-container">


      <Card className="question-card shadow-lg p-3 mb-5 bg-white rounded">
        <Question
          question={questions[currentQuestion - 1]}
          onNext={handleNext}
          onBack={handleBack}
          onMark={handleMark}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
          markedQuestions={markedQuestions}
          answers={answers}
          currentQuestion={currentQuestion}
          onGoTo={(questionId) => setCurrentQuestion(parseInt(questionId, 10))}
        />
      </Card>

      <Row className="my-4 text-center">
        <Col md={6} className="mx-auto">
          <CountdownClock timeLeft={timeLeft} /> {/* Sử dụng đồng hồ đếm ngược */}
          <ProgressBar variant="info" now={(timeLeft / (90 * 60)) * 100} className="time-progress-bar"/>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <Button variant="success" onClick={handleSubmitTest} className="submit-test-btn">
            Submit Test
          </Button>
        </Col>
      </Row>

      <Modal show={showResults} onHide={handleCloseResults} centered>
        <Modal.Header closeButton>
          <Modal.Title>Test Results</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Total Questions: {resultData?.totalQuestions}</p>
          <p>Correct Answers: {resultData?.correctAnswers}</p>
          <p>Your Score: {resultData?.score}%</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseResults}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Exam;
