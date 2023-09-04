const { userUpdate, userDelete } = require("../Controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Config/verifyToken");

const express = require("express");
const userRouter = express.Router();

userRouter.put("/:id", verifyTokenAndAuthorization, userUpdate);
userRouter.delete("/:id", verifyTokenAndAuthorization, userDelete);

module.exports = userRouter;
