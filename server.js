const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);

module.exports = server;
