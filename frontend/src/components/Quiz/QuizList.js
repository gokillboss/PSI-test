import React, { useEffect, useState } from 'react';
import { getQuizzes } from '../../services/api';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

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

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h2>Available Quizzes</h2>
                    <ListGroup>
                        {quizzes.map((quiz) => (
                            <ListGroup.Item key={quiz._id}>
                                <Link to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default QuizList;
