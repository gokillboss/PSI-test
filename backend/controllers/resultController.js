const Result = require('../models/resultModel');

exports.getUserResults = async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId }).populate('testId');
    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
