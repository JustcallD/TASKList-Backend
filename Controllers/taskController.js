const mongoose = require("mongoose");
const User = require("../Models/User");
const Tasks = require("../Models/Task");

const getTask = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get tasks." });
  }
};

const postTask = async (req, res) => {
  const { title, description } = req.body;
  const userID = req.user.id;
  console.log(userID);
  const newTask = new Tasks({
    title,
    description,
    assignedTo: userID,
  });
  try {
    (await newTask.save()).populate("assignedTo");
    res.status(201).send(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " something is wrong" });
  }
};

const putTask = async (req, res) => {};

const deleteTask = async (req, res) => {};

module.exports = {
  getTask,
  postTask,
  putTask,
  deleteTask,
};

// // Create a new task
// app.post("/api/tasks", async (req, res) => {
//     const { title, description } = req.body;
//     const newTask = new Task({
//       title,
//       description,
//       status: false,
//     });

//     try {
//       await newTask.save();
//       res.status(201).json(newTask);
//     } catch (err) {
//       console.error("Error creating task:", err);
//       res.status(500).json({ error: "Failed to create task." });
//     }
//   });

//   // Get all tasks
//   app.get("/api/tasks", async (req, res) => {
//     try {
//       const tasks = await Task.find({});
//       res.status(200).json(tasks);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: "Failed to get tasks." });
//     }
//   });

//   // Update a task
//   app.put("/api/tasks/:id", async (req, res) => {
//     const taskId = req.params.id;
//     const { title, description, status } = req.body;

//     try {
//       const updatedTask = await Task.findByIdAndUpdate(
//         taskId,
//         { title, description, status },
//         { new: true }
//       );
//       res.status(200).json({ message: "Task updated successfully." });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: "Failed to update task." });
//     }
//   });

//   // Delete a task
//   app.delete("/api/tasks/:id", async (req, res) => {
//     const taskId = req.params.id;

//     try {
//       await Task.findByIdAndRemove(taskId);
//       res.status(200).json({ message: "Task deleted successfully." });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ error: "Failed to delete task." });
//     }
//   });
