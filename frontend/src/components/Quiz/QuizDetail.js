import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getQuiz, submitQuiz } from '../../services/api';
import { useNavigate } from 'react-router-dom';

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

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2 className="my-4">{quiz.title}</h2>
      <Form onSubmit={handleSubmit}>
        {quiz.questions.map((question) => (
          <Row key={question._id} className="mb-4">
            <Col md={8}>
              <h5>{question.text}</h5>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default QuizDetail;
