import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskControllers.js";

const router = express.Router();

// @route   GET /api/tasks
// @desc    Get all tasks for logged-in user
// @access  Private
router.get("/", protect, getTasks);

// @route   POST /api/tasks
// @desc    Create new task
// @access  Private
router.post("/", protect, createTask);

// @route   PUT /api/tasks/:id
// @desc    Update task
// @access  Private
router.put("/:id", protect, updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete task
// @access  Private
router.delete("/:id", protect, deleteTask);

export default router;