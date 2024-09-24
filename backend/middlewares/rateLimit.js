const rateLimit = require("express-rate-limit");

// Middleware để giới hạn số lượng yêu cầu từ người dùng
const createRateLimit = (windowMs, max, message) => {
  return rateLimit({
    windowMs, // Khoảng thời gian tính (ví dụ: 1 giờ)
    max, // Số lượng yêu cầu tối đa trong khoảng thời gian đó
    message, // Thông báo khi bị giới hạn
    standardHeaders: true, // Trả về các thông tin về giới hạn trong các header (RateLimit-* headers)
    legacyHeaders: false, // Tắt các header cũ (X-RateLimit-*)
  });
};

// Tạo một rate limiter cho yêu cầu đặt lại mật khẩu (ví dụ 5 yêu cầu trong 1 giờ)
const resetPasswordLimiter = createRateLimit(
  60 * 60 * 1000, // 1 giờ
  5, // Tối đa 5 yêu cầu trong 1 giờ
  "Bạn đã gửi quá nhiều yêu cầu đặt lại mật khẩu. Vui lòng thử lại sau 1 giờ.",
);

const loginLimiter = createRateLimit(
  15 * 60 * 1000, // 15 phút
  10, // Tối đa 10 yêu cầu trong 15 phút
  "Bạn đã thử đăng nhập quá nhiều lần. Vui lòng thử lại sau 15 phút.",
);

//Tạo một rate limiter cho yêu cầu signup (ví dụ 5 yêu cầu trong 1 giờ)
const signupLimiter = createRateLimit(
  60 * 60 * 1000, // 1 giờ
  5, // Tối đa 5 yêu cầu trong 1 giờ
  "Bạn đã gửi quá nhiều yêu cầu đăng ký. Vui lòng thử lại sau 1 giờ.",
);

// Export middleware
module.exports = {
  resetPasswordLimiter,
  loginLimiter,
  signupLimiter,
};
