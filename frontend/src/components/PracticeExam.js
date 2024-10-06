import React, { useState, useEffect } from 'react';
import { Container, Card, Button, ProgressBar, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PracticeExam.css';

const PracticeExam = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch 70 questions from the Nail test
        fetchQuestions();
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !showResult) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            submitExam();
        }
    }, [timeLeft, showResult]);

    const fetchQuestions = async () => {
        try {
            // Replace this with your actual API call
            const response = await fetch('/api/nail-test-questions?limit=70');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleAnswer = (questionId, answerId) => {
        setAnswers({ ...answers, [questionId]: answerId });
    };

    const submitExam = () => {
        const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswerId).length;
        const scorePercentage = (correctAnswers / questions.length) * 100;
        setScore(scorePercentage);
        setShowResult(true);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Container className="practice-exam-container">
            <h2 className="text-center my-4">Practice Exam</h2>
            <ProgressBar now={(currentQuestionIndex + 1) / questions.length * 100} label={`${currentQuestionIndex + 1}/${questions.length}`} className="mb-4" />
            <div className="text-center mb-4">Time Left: {formatTime(timeLeft)}</div>
            
            {currentQuestion && (
                <Card className="question-card">
                    <Card.Body>
                        <Card.Title>Question {currentQuestionIndex + 1}</Card.Title>
                        <Card.Text>{currentQuestion.text}</Card.Text>
                        {currentQuestion.options.map((option) => (
                            <Button
                                key={option.id}
                                variant={answers[currentQuestion.id] === option.id ? "primary" : "outline-primary"}
                                className="m-2"
                                onClick={() => handleAnswer(currentQuestion.id, option.id)}
                            >
                                {option.text}
                            </Button>
                        ))}
                    </Card.Body>
                </Card>
            )}

            <div className="d-flex justify-content-between mt-4">
                <Button 
                    variant="secondary" 
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                >
                    Previous
                </Button>
                {currentQuestionIndex === questions.length - 1 ? (
                    <Button variant="success" onClick={submitExam}>Submit</Button>
                ) : (
                    <Button 
                        variant="primary"
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    >
                        Next
                    </Button>
                )}
            </div>

            <Modal show={showResult} onHide={() => navigate('/')}>
                <Modal.Header closeButton>
                    <Modal.Title>Exam Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Time taken: {formatTime(90 * 60 - timeLeft)}</p>
                    <p>Your score: {score.toFixed(2)}%</p>
                    <p>{score >= 75 ? "Congratulations! You passed!" : "Sorry, you didn't pass. Keep practicing!"}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigate('/')}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default PracticeExam;