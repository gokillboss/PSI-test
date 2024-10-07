import React, { useState, useEffect } from 'react';
import Question from './Question';
import { Container, Row, Col, ProgressBar, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../../services/api'; // Import hàm getQuiz để lấy dữ liệu bài thi

const Exam = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [quiz, setQuiz] = useState(null); // Trạng thái lưu thông tin bài thi
  const [questions, setQuestions] = useState([]); // Câu hỏi cho bài thi
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 phút
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

        setQuiz(quizData); // Lưu thông tin bài thi
        setQuestions(selectedQuestions); // Lưu danh sách câu hỏi đã chọn
      } catch (error) {
        console.error('Error fetching quiz', error);
      }
    };

    fetchQuiz(); // Gọi hàm lấy dữ liệu bài thi
  }, [id]); // Chỉ chạy khi id thay đổi

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);


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
      const selectedAnswer = answers[question._id]; // Câu trả lời của người dùng
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
    <Container>
      <Row className="my-4">
        <Col>
          <h4>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</h4>
          <ProgressBar now={(timeLeft / (90 * 60)) * 100} />
        </Col>
      </Row>

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

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="success" onClick={handleSubmitTest}>
            Submit Test
          </Button>
        </Col>
      </Row>

      <Modal show={showResults} onHide={handleCloseResults} centered>
        <Modal.Header closeButton>
          <Modal.Title>Test Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
