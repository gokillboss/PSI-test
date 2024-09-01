import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getQuiz, submitQuiz } from '../../services/api';


// Utility function to shuffle options
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const QuizDetail = () => {
    const { id } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const questionsPerPage = 10;

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await getQuiz(id);
                const quizData = response.data;
                quizData.questions.forEach(question => {
                    question.options = shuffleArray(question.options);
                });
                setQuiz(quizData);
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
            setResults(response.data);
        } catch (error) {
            console.error('Error submitting quiz', error);
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const paginatedQuestions = quiz ? quiz.questions.slice(startIndex, endIndex) : [];

    if (!quiz) {
        return <div>Loading...</div>;
    }

    if (results) {
        return (
            <Container>
                <h2 className="my-4">{quiz.title} - Results</h2>
                <Alert variant="info">
                    Your score: {results.score} out of {results.totalQuestions}
                </Alert>
                {results.results.map((result, index) => (
                    <Row key={result.questionId} className="mb-4">
                        <Col md={8}>
                            <h5>{`${index + 1}. ${result.questionText}`}</h5>
                            {quiz.questions.find(q => q._id === result.questionId).options.map((option) => {
                                const isSelected = result.selectedOption === option.text;
                                const isCorrect = option.text === result.correctOption;
                                const style = {
                                    color: isCorrect ? 'green' : (isSelected ? 'red' : 'black'),
                                    fontWeight: isCorrect ? 'bold' : 'normal',
                                };
                                return (
                                    <div key={option._id} style={style}>
                                        <Form.Check
                                            type="radio"
                                            name={result.questionId}
                                            value={option.text}
                                            label={option.text}
                                            checked={isSelected}
                                            readOnly
                                        />
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                ))}
                <Button variant="primary" onClick={() => navigate('/quizzes')}>Back to Quizzes</Button>
            </Container>
        );
    }

    return (
        <Container>
            <h2 className="my-4">{quiz.title}</h2>
            <Form onSubmit={handleSubmit}>
                {paginatedQuestions.map((question, index) => (
                    <Row key={question._id} className="mb-4">
                        <Col md={8}>
                            <h5>{`${startIndex + index + 1}. ${question.questionText}`}</h5>
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
                        </Col>
                    </Row>
                ))}
                <div className="d-flex justify-content-between">
                    <Button
                        variant="secondary"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleNextPage}
                        disabled={endIndex >= quiz.questions.length}
                    >
                        Next
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default QuizDetail;
