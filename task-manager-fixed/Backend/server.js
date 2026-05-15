import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default Route
app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Handle Unknown Routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});