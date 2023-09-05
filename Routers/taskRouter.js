const {
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require("../Controllers/taskController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Config/verifyToken");

const express = require("express");
const taskRouter = express.Router();

taskRouter.get("/",verifyTokenAndAuthorization, getTask);
taskRouter.post("/", verifyTokenAndAuthorization, postTask);

module.exports = taskRouter;
