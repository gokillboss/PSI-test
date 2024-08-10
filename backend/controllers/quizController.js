const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');

exports.getTests = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('questions', 'questionText');
    res.status(200).json(quizzes);
  } catch (err) {
    console.error('Error fetching quizzes:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (err) {
    console.error('Error fetching quiz by ID:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createTest = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const newQuiz = new Quiz({
      title,
      description,
      questions
    });

    const quiz = await newQuiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    console.error('Error creating quiz:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.submitTest = async (req, res) => {
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(req.params.id).populate('questions');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    const results = quiz.questions.map(question => {
      const userAnswer = answers.find(answer => answer.questionId === question._id.toString());
      const isCorrect = userAnswer && question.options.find(option => option.text === userAnswer.selectedOption && option.isCorrect);

      if (isCorrect) {
        score += 1;
      }

      return {
        questionId: question._id,
        questionText: question.questionText,
        selectedOption: userAnswer ? userAnswer.selectedOption : null,
        correctOption: question.options.find(option => option.isCorrect).text,
        isCorrect: !!isCorrect
      };
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length, results });
  } catch (err) {
    console.error('Error submitting quiz:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
