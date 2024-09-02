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
        console.log('Sending email...' + email);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Xác nhận đăng ký tài khoản - Your Company Name',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #007BFF;">Chào ${firstName} ${lastName},</h2>
                    <p>Cảm ơn bạn đã đăng ký tài khoản tại <strong>Your Company Name</strong>!</p>
                    <p>Vui lòng nhấp vào nút bên dưới để xác nhận địa chỉ email của bạn và hoàn tất quá trình đăng ký.</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${url}" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Xác nhận Email</a>
                    </div>
                    <p>Nếu bạn không thực hiện yêu cầu này, bạn có thể bỏ qua email này.</p>
                    <p>Nếu bạn gặp bất kỳ vấn đề gì, hãy liên hệ với đội ngũ hỗ trợ của chúng tôi qua email <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.</p>
                    <br>
                    <p>Trân trọng,</p>
                    <p><strong>Đội ngũ Your Company Name</strong></p>
                </div>
            `
        }, (error, info) => {
            if (error) {
                console.error('Error sending test email:', error);
            } else {
                console.log('Test email sent:', info.response);
            }
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
