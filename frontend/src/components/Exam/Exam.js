import React, { useState, useEffect } from 'react';
import Question from './Question';
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../../services/api';
import './Exam.css';

const Exam = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [resultData, setResultData] = useState(null);
    const [passStatus, setPassStatus] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [isReview, setIsReview] = useState(false);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await getQuiz(id);
                const quizData = response.data;
                const shuffledQuestions = quizData.questions.sort(() => 0.5 - Math.random());
                const selectedQuestions = shuffledQuestions.slice(0, 70);

                const questionsWithNewIds = selectedQuestions.map((question, index) => ({
                    ...question,
                    newId: index + 1,
                }));

                setQuiz(quizData);
                setQuestions(questionsWithNewIds);
            } catch (error) {
                console.error('Error fetching quiz', error);
            }
        };

        fetchQuiz();
    }, [id]);

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
            const selectedAnswer = answers[question.newId];
            const correctOption = question.options.find((option) => option.isCorrect);
            if (correctOption && correctOption.text === selectedAnswer) {
                return count + 1;
            }
            return count;
        }, 0);

        const score = ((correctAnswers / questions.length) * 100).toFixed(2);

        setResultData({
            totalQuestions: questions.length,
            correctAnswers,
            score,
        });

        setPassStatus(score >= 75);
        setShowResults(true);
    };

    const handleRetakeTest = () => {
        setCurrentQuestion(1);
        setAnswers({});
        setMarkedQuestions([]);
        setShowResults(false);
        setIsReset(true);
        setIsReview(false); // Disable review mode when retaking the test
    };

    const handleReviewTest = () => {
        setShowResults(false);
        setIsReview(true); // Enable review mode
    };

    if (!quiz || questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="exam-container">
            <h1 className="text-center mb-4 ">{quiz.title}</h1>
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
                    isReset={isReset}
                    isReview={isReview} // Pass the isReview prop to Question
                    resetComplete={() => setIsReset(false)}
                />
            </Card>

            <Row className="my-4 text-center">
                <Col>
                    {!isReview ? (
                        <Button variant="success" onClick={handleSubmitTest} className="submit-test-btn">
                            Nộp Bài
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={handleRetakeTest}>
                            Thi Lại
                        </Button>
                    )}
                </Col>
            </Row>


            <Modal show={showResults} onHide={handleRetakeTest} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Kết Quả Thi</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>Total Questions: {resultData?.totalQuestions}</p>
                    <p>Correct Answers: {resultData?.correctAnswers}</p>
                    <p>Your Score: {resultData?.score}%</p>

                    {passStatus ? (
                        <div className="congratulations-message">
                            🎉 Chúc mừng! Bạn đã thi đậu! 🎉
                        </div>
                    ) : (
                        <div className="failed-message">
                            😢 Rất tiếc! Bạn đã không đạt yêu cầu. Hãy thử lại lần nữa! 😢
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleRetakeTest}>
                        Thi Lại
                    </Button>
                    <Button variant="secondary" onClick={handleReviewTest}>
                        Xem Lại
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Exam;
