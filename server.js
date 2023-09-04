const express = require("express");
const app = express();
app.use(express.json());

// cors
const cors = require("cors");
app.use(cors());

// dotenv
const dotenv = require("dotenv");
dotenv.config();
// DB

require("./Config/ConnectDB");

// import routes
const authRouter = require("./Routers/authRouter");
const userRouter = require("./Routers/userRouter");
const taskRouter = require("./Routers/taskRouter");

app.use("/v1/auth", authRouter);
app.use("/v1/user", userRouter);
app.use("/v1/task", taskRouter);
// app.use("/v1/admin");

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
