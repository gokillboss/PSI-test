const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: { 
        type: String, 
        required: [true, 'Title is required'], 
        trim: true,  // Loại bỏ khoảng trắng dư thừa
        minlength: [3, 'Title must be at least 3 characters long']  // Đảm bảo độ dài tối thiểu
    },
    description: { 
        type: String, 
        default: ''  // Đặt giá trị mặc định nếu không có
    },
    questions: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Question' 
    }],
    price : { 
        type: Number, 
        default: 0,
        min: [0, 'Price must be a positive number']  // Đảm bảo giá trị không âm
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);
