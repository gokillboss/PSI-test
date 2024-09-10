#Quiz Web Application with Stripe Payment Integration

## About the Project

This project is a full-stack web application designed for users to register, log in, and
participate in quizzes. The quizzes can be paid or free, and Stripe is integrated for
handling payments. The project is built using Node.js, Express, MongoDB, and React with
deployment on AWS EC2, S3, Route 53, and Stripe as the payment gateway.

## Features

-User Authentication (Signup, Login, Password Reset)
-Profile Management
-Browse Quizzes (Free and Paid)
-Stripe Integration for Payment
-Quiz Participation and Results Tracking
-MongoDB for database management
-AWS Integration (EC2, S3, Route 53)

## Tech Stack

### Frontend:

-React: User interface built with React.
-React Bootstrap: For styling and responsive design.
-CSS : For styling and responsive design.
-Stripe API: Integrated to handle payments via Stripe Checkout.

### Backend:

-Node.js: Server-side runtime.
-Express: Framework for building RESTful APIs.
-MongoDB: Database for storing users, quizzes, and transactions.
-Stripe: Payment processing API.
-JWT: Token-based authentication.
-AWS: Deployed using AWS EC2, S3, and Route 53 for domain and static content management.

## Project Architecture

Client (React) <-> API (Node.js/Express) <-> MongoDB (Database)
|
Stripe (Payment)

## Key Components

### Frontend (React):

-React Bootstrap for UI components.
-Stripe Checkout for payment integration.
-Authenticated user flow for accessing paid quizzes.

### Backend (Node.js/Express):

-RESTful API for managing users, quizzes, and payments.
-JWT for user authentication.
-MongoDB for data storage (users, quizzes, transactions).
-Stripe for creating payment sessions and handling webhooks.

### Deployment:

-AWS EC2: Hosts the backend server and database.
-Amazon S3: Serves static assets (optional).
-Route 53: DNS management for the custom domain.
-CloudFront (Optional): For faster static asset delivery.

## Prerequisites

-Node.js (v14 or later)
-MongoDB (local or MongoDB Atlas)
-Stripe account
-AWS account (for deployment)

## Getting Started
