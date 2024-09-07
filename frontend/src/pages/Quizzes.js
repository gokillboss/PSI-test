import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getQuizzes } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await getQuizzes();
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes', error);
            }
        };

        fetchQuizzes();
    }, []);

    const handleStartTest = (id) => {
        navigate(`/quizzes/${id}`);
    };

    return (
        <Container>
            <h2 className="my-4">Available Quizzes</h2>
            <Row>
                {quizzes.map(quiz => (
                    <Col key={quiz._id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{quiz.title}</Card.Title>
                                <Card.Text>{quiz.description}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => handleStartTest(quiz._id)}
                                >
                                    Start Test
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Quizzes;
