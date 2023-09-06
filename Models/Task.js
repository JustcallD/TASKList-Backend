const mongoose = require("mongoose");

const TaskStatus = {
  OPEN: "open",
  IN_PROGRESS: "in-progress",
  COMPLETE: "completed",
};

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    // project: { type: mongoose.Types.ObjectId, ref: "Project" },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      enum: TaskStatus,
      default: TaskStatus.OPEN,
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Tasks", taskSchema);
