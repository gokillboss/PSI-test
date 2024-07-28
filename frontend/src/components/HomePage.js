import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import nailExamImage from '../assets/nail-exam.jpg'; // Ensure you have an image in the assets folder

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col md="8">
          <Image src={nailExamImage} fluid rounded />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Welcome to the Nail Certification Exam Preparation Website</Card.Title>
              <Card.Text>
                Are you preparing for your nail certification exam? Our website is designed to help you pass the exam with flying colors. We provide a comprehensive set of practice questions, tips, and resources that cover all aspects of the exam.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About the Nail Certification Exam</Card.Title>
              <Card.Text>
                The nail certification exam tests your knowledge and skills in nail care, safety, and professional practices. It is a crucial step in becoming a licensed nail technician. Our platform offers detailed practice tests that mirror the actual exam format, ensuring you are well-prepared.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>How We Help You Succeed</Card.Title>
              <Card.Text>
                Our website provides:
                <ul>
                  <li>Extensive practice questions with detailed explanations</li>
                  <li>Timed mock exams to simulate the real exam environment</li>
                  <li>Study tips and strategies to enhance your preparation</li>
                  <li>Supportive community forums to connect with other exam takers</li>
                </ul>
                Join us today and take the first step towards your successful nail certification!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
