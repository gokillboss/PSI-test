import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { getUserResults } from '../../services/api';

const QuizResult = () => {
    const { id } = useParams();
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const response = await getUserResults(user.id);
                const quizResult = response.data.find((res) => res._id === id);
                setResult(quizResult);
            } catch (error) {
                console.error('Error fetching result', error);
            }
        };

        fetchResult();
    }, [id]);

    if (!result) return <div>Loading...</div>;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Quiz Result</Card.Title>
                            <Card.Text>
                                Score: {result.score} / {result.answers.length}
                            </Card.Text>
                            <ListGroup>
                                {result.detailedResults.map((detail, index) => (
                                    <ListGroup.Item key={index}>
                                        <h5>{detail.question}</h5>
                                        <p>Your Answer: {detail.userAnswer}</p>
                                        <p>Correct Answer: {detail.correctAnswer}</p>
                                        <p>{detail.isCorrect ? 'Correct' : 'Incorrect'}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizResult;
