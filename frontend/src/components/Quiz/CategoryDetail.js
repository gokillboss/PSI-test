import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getCategoryById } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const CategoryDetail = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(id);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category', error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleStartTest = (testId) => {
    navigate(`/quizzes/${testId}`);
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2 className="my-4">{category.name}</h2>
      <Row>
        {category.tests.map(test => (
          <Col key={test._id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{test.title}</Card.Title>
                <Card.Text>{test.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleStartTest(test._id)}
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

export default CategoryDetail;
