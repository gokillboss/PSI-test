const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const transporter = require('../config/email');
require('dotenv').config();



exports.signup = async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    try {
        // Kiểm tra xem người dùng đã tồn tại chưa
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash mật khẩu trước khi lưu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Tạo token để xác thực email
        const emailToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const url = `http://localhost:${process.env.PORT}/api/auth/confirm/${emailToken}`;

        // Gửi email xác thực
        await transporter.sendMail({
            to: email,
            subject: 'Xác nhận đăng ký tài khoản',
            html: `Bấm vào liên kết sau để xác nhận tài khoản của bạn: <a href="${url}">${url}</a>`,
        });

        // Tạo người dùng mới với trạng thái chưa xác thực
        user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber,
            isVerified: false 
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully. Please check your email to verify your account.' });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};





exports.confirmEmail = async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ email: decoded.email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ message: 'Email has been verified. You can now log in.' });
    } catch (error) {
        console.error('Error confirming email:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};





exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
       
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        if (!user.isVerified) {
            return res.status(400).json({ message: 'Please verify your email to log in.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create payload for JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // sign Up return token
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error('Error logging in user:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};
