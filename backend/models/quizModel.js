const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    isPaid: { type: Boolean, required: true, default: false },
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);
