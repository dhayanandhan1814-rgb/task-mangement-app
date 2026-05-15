import mongoose from "mongoose";

// Task Schema
const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },

    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true
    },

    description: {
      type: String,
      required: [true, "Task description is required"],
      trim: true
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

// Export Model
const Task = mongoose.model("Task", taskSchema);

export default Task;