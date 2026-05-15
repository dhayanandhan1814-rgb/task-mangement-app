import Task from "../models/Task.js";

// Get all tasks for logged-in user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Create new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Please fill all required fields"
      });
    }

    const task = await Task.create({
      user: req.user._id,
      title,
      description,
      status
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task removed successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};