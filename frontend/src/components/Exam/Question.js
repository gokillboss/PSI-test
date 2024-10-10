import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Card, ProgressBar } from "react-bootstrap";
import { FlagFill, Flag } from 'react-bootstrap-icons';
import CountdownClock from "./CountdownClock";
import './Question.css';

const Question = ({
    question, onNext, onBack, onMark, totalQuestions, handleAnswer,
    markedQuestions, answers, currentQuestion, onGoTo, isReview
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [localAnswers, setLocalAnswers] = useState(answers);
    const [timeLeft, setTimeLeft] = useState(90 * 60); // Setting initial time to 90 minutes

    useEffect(() => {
        if (answers[question.newId]) {
            setSelectedAnswer(answers[question.newId]);
        } else {
            setSelectedAnswer('');
        }
        setLocalAnswers(answers);
    }, [question.newId, answers]);

    useEffect(() => {
        if (!isReview) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isReview]);

    const handleSelectAnswer = (e) => {
        if (!isReview) {
            const newAnswer = e.target.value;
            setSelectedAnswer(newAnswer);
            handleAnswer(question.newId, newAnswer);
            setLocalAnswers(prev => ({ ...prev, [question.newId]: newAnswer }));
        }
    };

    const renderQuestionGrid = () => {
        return (
            <div className="question-grid">
                {Array.from({ length: totalQuestions }).map((_, index) => {
                    const questionId = index + 1;
                    const isAnswered = localAnswers.hasOwnProperty(questionId);
                    const isMarked = markedQuestions.includes(questionId);
                    const isCurrent = currentQuestion === questionId;

                    let buttonClass = 'question-button ';
                    buttonClass += isAnswered ? (isCurrent ? 'answered' : 'answered-not-current') : 'not-answered';
                    buttonClass += isCurrent ? ' current' : '';

                    return (
                        <div
                            key={questionId}
                            className={buttonClass}
                            onClick={() => onGoTo(questionId)} // Handle question navigation
                        >
                            {isMarked ? <FlagFill className="flag-icon" /> : null} {/* Display FlagFill if marked */}
                            {questionId}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Container className="mt-4">
            <Row className="mb-3">
                <Col lg={6} md={12} className="mb-4">
                    <Card className="question-card shadow p-2 mb-3 w-100 fixed-height-card">
                        <Card.Body>
                            <Card.Title>
                                {markedQuestions.includes(currentQuestion) && (
                                    <FlagFill color="red" className="mr-5" />
                                )}
                                Question {currentQuestion}
                            </Card.Title>
                            <Card.Text>{question.questionText}</Card.Text>

                            <Form.Group as={Row} className="mb-3 my-3">
                                <Col sm="12">
                                    {question.options && question.options.map((option, index) => {
                                        const isCorrect = option.isCorrect;
                                        const isSelected = selectedAnswer === option.text;

                                        let labelStyle = {};
                                        if (isReview) {
                                            if (isCorrect) {
                                                labelStyle = { color: 'green' };
                                            } else if (isSelected && !isCorrect) {
                                                labelStyle = { color: 'red' };
                                            }
                                        }

                                        return (
                                            <Form.Check
                                                key={index}
                                                type="radio"
                                                id={`option-${question.newId}-${index}`}
                                                label={option.text}
                                                value={option.text}
                                                checked={isSelected}
                                                onChange={handleSelectAnswer}
                                                disabled={isReview}
                                                style={labelStyle}
                                            />
                                        );
                                    })}
                                </Col>
                            </Form.Group>

                            <Row className="my-3 d-flex justify-content-between">
                                <Col>
                                    <Button variant="secondary" onClick={onBack} disabled={currentQuestion === 1}>
                                        Back
                                    </Button>
                                </Col>

                                {/* Adding a clickable flag for marking/unmarking */}
                                <Col className="d-flex justify-content-center">
                                    <div
                                        onClick={() => !isReview && onMark(currentQuestion)} // Disable onClick when in review mode
                                        style={{ cursor: isReview ? 'default' : 'pointer' }} 
                                    >
                                        {markedQuestions.includes(currentQuestion) ? (
                                            <FlagFill color="red" size={30} />
                                        ) : (
                                            <Flag size={30} />
                                        )}
                                    </div>
                                </Col>

                                <Col className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={onNext} disabled={currentQuestion === totalQuestions}>
                                        Next
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} md={12}>
                    <div className="py-3">
                        <CountdownClock timeLeft={timeLeft} />
                        <ProgressBar variant="info" now={(timeLeft / (90 * 60)) * 100} className="time-progress-bar" />
                    </div>
                    <div className="my-5">
                        {renderQuestionGrid()}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Question;
