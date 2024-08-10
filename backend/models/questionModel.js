const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    text: { type: String, required: true },
    isCorrect: { type: Boolean, required: true, default: false }
});

const questionSchema = new Schema({
    quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
    questionText: { type: String, required: true },
    options: [optionSchema],  // Array of options, each with text and isCorrect fields
    category: { type: Number, required: true }  // Category field with values 1, 2, 3, 4
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
