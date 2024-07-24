const Test = require('../models/testModel');
const Question = require('../models/questionModel');
const Result = require('../models/resultModel');

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find().populate('questions');
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id).populate('questions');
    if (!test) {
      return res.status(404).json({ msg: 'Test not found' });
    }
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.submitTest = async (req, res) => {
  const { answers } = req.body;
  try {
    const test = await Test.findById(req.params.id).populate('questions');
    if (!test) {
      return res.status(404).json({ msg: 'Test not found' });
    }

    let score = 0;
    test.questions.forEach((question) => {
      const userAnswer = answers.find(answer => answer.questionId === question._id.toString());
      if (userAnswer) {
        const correctOption = question.options.find(option => option.isCorrect);
        if (correctOption && correctOption.text === userAnswer.selectedOption) {
          score += 1;
        }
      }
    });

    const result = new Result({
      userId: req.user.id,
      testId: test.id,
      answers,
      score
    });

    await result.save();
    res.json({ score, result });
  } catch (err) {
    console.error('Error in submitTest:', err);
    res.status(500).send('Server error');
  }
};



exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
