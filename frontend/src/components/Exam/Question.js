import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import { FlagFill } from 'react-bootstrap-icons';
import './Question.css';

const Question = ({ question, onNext, onBack, onMark, totalQuestions, handleAnswer, markedQuestions, answers, currentQuestion, onGoTo }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [localAnswers, setLocalAnswers] = useState(answers);

    useEffect(() => {
        if (answers[question.newId]) {
            setSelectedAnswer(answers[question.newId]); // Cập nhật selectedAnswer với newId
        } else {
            setSelectedAnswer('');
        }
        setLocalAnswers(answers); // Cập nhật localAnswers
    }, [question.newId, answers]);

    const handleSelectAnswer = (e) => {
        const newAnswer = e.target.value;
        setSelectedAnswer(newAnswer);
        handleAnswer(question.newId, newAnswer); // Gọi hàm handleAnswer với newId
        setLocalAnswers(prev => ({ ...prev, [question.newId]: newAnswer })); // Lưu đáp án vào localAnswers
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
                            onClick={() => onGoTo(questionId)} // Đảm bảo rằng onGoTo nhận đúng ID
                        >
                            {isMarked && <FlagFill className="flag-icon" />}
                            {questionId}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Container className="mt-4">
            <Card className="question-card shadow p-4 mb-3">
                <Card.Body>
                    <Card.Title>
                        {markedQuestions.includes(currentQuestion) && <FlagFill color="red" className="mr-5" />}
                        Question {currentQuestion}
                    </Card.Title>
                    <Card.Text>{question.questionText}</Card.Text>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            {question.options && question.options.map((option, index) => (
                                <Form.Check
                                    key={index}
                                    type="radio"
                                    label={option.text}
                                    value={option.text}
                                    checked={selectedAnswer === option.text}
                                    onChange={handleSelectAnswer}
                                />
                            ))}
                        </Col>
                    </Form.Group>

                    <Button
                        variant={markedQuestions.includes(currentQuestion) ? "danger" : "warning"}
                        onClick={() => onMark(currentQuestion)}
                        className="mb-3"
                    >
                        {markedQuestions.includes(currentQuestion) ? "Unmark" : "Mark"} Question
                    </Button>

                    <Row className="my-3">
                        <Col>
                            <Button variant="secondary" onClick={onBack} disabled={currentQuestion === 1}>
                                Back
                            </Button>
                        </Col>
                        <Col className="text-right">
                            <Button variant="primary" onClick={onNext} disabled={currentQuestion === totalQuestions}>
                                Next
                            </Button>
                        </Col>
                    </Row>

                    {renderQuestionGrid()}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Question;
