import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { getQuiz, submitQuiz } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
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
      setResults(response.data);
    } catch (error) {
      console.error('Error submitting quiz', error);
    }
  };

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
        {results.results.map((result) => (
          <Row key={result.questionId} className="mb-4">
            <Col md={8}>
              <h5>{result.questionText}</h5>
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
