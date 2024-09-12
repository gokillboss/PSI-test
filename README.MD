# Quiz Web Application with Stripe Payment Integration

This project is a full-stack web application designed for users to register, log in, and participate in quizzes. The quizzes can be either paid or free, and Stripe is integrated for handling payments. The project is built using Node.js, Express, MongoDB, and React with deployment on AWS EC2, S3, Route 53, and Stripe as the payment gateway.

## Features

- User Authentication (Signup, Login, Password Reset)
- Profile Management
- Browse Quizzes (Free and Paid)
- Stripe Integration for Payments
- Quiz Participation and Results Tracking
- MongoDB for database management
- AWS Integration (EC2, S3, Route 53)

## Tech Stack

### Frontend:

- **React**: User interface built with React.
- **React Bootstrap**: For styling and responsive design.
- **Stripe API**: Integrated to handle payments via Stripe Checkout.

### Backend:

- **Node.js**: Server-side runtime.
- **Express**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing users, quizzes, and transactions.
- **Stripe**: Payment processing API.
- **JWT**: Token-based authentication.
- **AWS**: Deployed using AWS EC2, S3, and Route 53 for domain and static content management.

## Key Components

### Frontend (React):

- **React Bootstrap**: For UI components and responsive layout.
- **Stripe Checkout**: For handling payments.
- **Authenticated User Flow**: Restrict access to paid quizzes only for paying users.

### Backend (Node.js/Express):

- **RESTful API**: Manages users, quizzes, and payment processing.
- **JWT**: Secure user authentication with tokens.
- **MongoDB**: Stores users, quizzes, and transactions.
- **Stripe**: Creates payment sessions and handles webhooks.

### Deployment:

- **AWS EC2**: Hosts the backend server and manages database connections.
- **Amazon S3**: Serves static assets (optional).
- **Route 53**: DNS management for custom domains.
- **CloudFront** (Optional): For faster static asset delivery.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (local or MongoDB Atlas)
- Stripe account
- AWS account (for deployment)

## Getting Started

### 1. Clone the repository

git clone https://github.com/yourusername/quiz-app.git
cd PSI_TEST

### 2. Install dependencies

**Backend**
cd backend
npm install
**Frontend**
cd frontend
npm install

### 3. Environment Variables

Create a .env file in the backend directory with the following environment variables:

- PORT=5000
- MONGO_URI=mongodb://127.0.0.1:27017/quiz-app
- JWT_SECRET=your_jwt_secret
- STRIPE_SECRET_KEY=your_stripe_secret_key
- STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
- FRONTEND_URL=http://localhost:3000 # Update this for production

### 4. Run MongoDB Locally (if not using MongoDB Atlas)

mongod --dbpath /path/to/your/db

### 5. Run the application

**Backend**
cd backend
npm start

**Frontend**
cd frontend
npm start
The application should now be running on:

Frontend: http://localhost:3000
Backend API: http://localhost:5000

### 6. Stripe Webhook (Optional)

To test Stripe webhook events (like payment success), you'll need to run Stripe CLI:

stripe listen --forward-to http://localhost:5000/api/payment/webhook
