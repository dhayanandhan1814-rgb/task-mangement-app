# Task Management App

A full-stack Task Management Application built with **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend. This project allows users to register, log in securely, and manage daily tasks with authentication.

---

# 📁 Project Structure

task-management-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── Loader.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Tasks.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md

---

# 🚀 Features

## 👤 User Authentication
- Register new account
- Login existing account
- JWT token authentication
- Protected routes

## 📋 Task Management
- Create tasks
- View all tasks
- Update task status
- Delete tasks
- Dashboard overview

## 🎨 Frontend
- Responsive UI
- React Context API for authentication
- Axios API integration
- Reusable components

## 🔒 Backend
- REST API
- MongoDB database
- Express middleware
- Secure password hashing with bcrypt

---

# 🛠️ Tech Stack

## Frontend:
- React.js
- Vite
- React Router DOM
- Axios
- CSS

## Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

git clone <your-repository-link>
cd task-management-app

---

# 🖥️ Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

# 🌐 Backend Setup

cd backend
npm install
npm start

Backend runs on:
http://localhost:5000

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

# 📡 API Endpoints

## Auth Routes:
POST /api/auth/register  
POST /api/auth/login

## Task Routes:
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id

---

# 📷 Screens Included
- Login Page
- Register Page
- Dashboard
- Task Management Page

---

# 🧠 Future Improvements
- Task deadlines
- Priority levels
- Search & filters
- Dark mode
- Notifications

---

# 👨‍💻 Author
**Dhaya**

---

# 📜 License
This project is for educational purposes and project submission.

---

# 💡 Notes
- Make sure MongoDB is connected before running backend.
- Run frontend and backend simultaneously.
- Update API base URL if backend port changes.

---

## ⭐ Submission Ready
This project is suitable for:
- College Mini Project
- Full Stack Developer Portfolio
- Internship Submission