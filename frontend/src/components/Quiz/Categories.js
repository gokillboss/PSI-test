import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { getCategories } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, []);

  const handleStartCategory = (id) => {
    navigate(`/categories/${id}`);
  };

  return (
    <Container>
      <h2 className="my-4">Available Categories</h2>
      <Row>
        {categories.map(category => (
          <Col key={category._id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => handleStartCategory(category._id)}
                >
                  View Tests
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
