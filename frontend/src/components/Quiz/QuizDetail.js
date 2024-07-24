import React, { useEffect, useState } from 'react';
import { getQuiz, submitQuiz } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const QuizDetail = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await getQuiz(id);
                setQuiz(response.data);
            } catch (error) {
                console.error('Error fetching quiz', error);
            }
        };

        fetchQuiz();
    }, [id]);

    const handleChange = (questionId, selectedOption) => {
        setAnswers({
            ...answers,
            [questionId]: selectedOption,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedAnswers = Object.keys(answers).map((questionId) => ({
            questionId,
            selectedOption: answers[questionId],
        }));
        try {
            const response = await submitQuiz(id, formattedAnswers);
            navigate(`/results/${response.data.result._id}`);
        } catch (error) {
            console.error('Error submitting quiz', error);
        }
    };

    if (!quiz) return <div>Loading...</div>;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h2>{quiz.title}</h2>
                    <Form onSubmit={handleSubmit}>
                        {quiz.questions.map((question) => (
                            <div key={question._id}>
                                <h4>{question.text}</h4>
                                {question.options.map((option) => (
                                    <Form.Check
                                        key={option._id}
                                        type="radio"
                                        name={question._id}
                                        value={option.text}
                                        label={option.text}
                                        onChange={() => handleChange(question._id, option.text)}
                                    />
                                ))}
                            </div>
                        ))}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizDetail;
