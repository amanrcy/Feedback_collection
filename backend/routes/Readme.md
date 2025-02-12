# Feedback App Documentation

## Overview

The Feedback App is a web-based application that allows users to submit feedback. It includes a **ReactJS frontend** and a **Node.js backend** with a **MySQL database**. The application follows security best practices and includes **manual and automated testing**.

---

## 1. Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or later)
- **MySQL** (Set up locally or use a cloud database)
- **npm** (Installed with Node.js)
- **Git** (Optional but recommended)

### Clone the Repository

```sh
git clone <repository-url>
cd feedback-app
```

### Backend Setup

```sh
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=feedback_db
JWT_SECRET=your_secret_key
```

#### Start Backend

```sh
npm start
```

### Frontend Setup

```sh
cd ../frontend
npm install
npm start
```

The React app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## 2. API Endpoints

### Authentication

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| POST   | `/api/auth/register` | Register a new user               |
| POST   | `/api/auth/login`    | Authenticate user & get JWT token |

### Feedback Management

| Method | Endpoint             | Description                                       |
| ------ | -------------------- | ------------------------------------------------- |
| POST   | `/api/feedbacks`     | Submit feedback (Authenticated users only)        |
| GET    | `/api/feedbacks`     | Retrieve all feedbacks (Authenticated users only) |
| PUT    | `/api/feedbacks/:id` | Update feedback by ID (Authenticated users only)  |
| DELETE | `/api/feedbacks/:id` | Delete feedback by ID (Authenticated users only)  |

---

## 3. Security Measures

- **JWT Authentication**: Secures API endpoints.
- **Password Hashing**: Uses `bcrypt` to store hashed passwords.
- **Input Validation**: Protects against SQL injection and XSS.
- **CORS Policy**: Restricts API access.
- **Secure HTTP Headers**: Added using `helmet`.
- **Role-based Access Control**: Only authenticated users can modify feedback.

---

## 4. Testing

### Manual Testing

| Test Case                               | Expected Outcome                   |
| --------------------------------------- | ---------------------------------- |
| Submit valid feedback                   | Feedback is stored in the database |
| Submit feedback with empty fields       | Error message displayed            |
| Unauthorized access to `/api/feedbacks` | Request is denied                  |
| Update feedback with valid JWT          | Feedback updated successfully      |

### Automated Testing

Run backend tests using Jest and Supertest:

```sh
cd backend
npm test
```

---

## 5. Conclusion

This Feedback App is a secure and scalable application built with React, Node.js, and MySQL. It includes JWT authentication, input validation, and automated testing. 🚀

For any improvements, feel free to contribute!

