import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { getAllQuestions, submitQuiz } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const AllQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await getAllQuestions();
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleChange = (questionId, selectedOption, isCorrect) => {
        setAnswers({
            ...answers,
            [questionId]: selectedOption,
        });
        setFeedback({
            ...feedback,
            [questionId]: isCorrect,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedAnswers = Object.keys(answers).map((questionId) => ({
            questionId,
            selectedOption: answers[questionId],
        }));
        try {
            const response = await submitQuiz(formattedAnswers);
            navigate(`/results/${response.data.result._id}`);
        } catch (error) {
            console.error('Error submitting quiz', error);
        }
    };

    const getOptionStyle = (questionId, optionText) => {
        if (feedback[questionId] === undefined) return {};
        const isCorrect = feedback[questionId];
        const selectedOption = answers[questionId];
        if (optionText === selectedOption) {
            return isCorrect ? { color: 'green' } : { color: 'red' };
        }
        return {};
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h2>All Questions</h2>
                    <Form onSubmit={handleSubmit}>
                        <ListGroup>
                            {questions.map((question) => (
                                <ListGroup.Item key={question._id}>
                                    <h4>{question.text}</h4>
                                    {question.options.map((option) => (
                                        <Form.Check
                                            key={option._id}
                                            type="radio"
                                            name={question._id}
                                            value={option.text}
                                            label={option.text}
                                            onChange={() => handleChange(question._id, option.text, option.isCorrect)}
                                            style={getOptionStyle(question._id, option.text)}
                                            disabled={feedback[question._id] !== undefined}
                                        />
                                    ))}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AllQuestions;
