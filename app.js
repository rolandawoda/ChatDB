const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const socketio =  require("socket.io");
const compression = require('compression');
const helmet = require("helmet");


//App Routes
const authRoutes = require("./routes/auth");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const chatRoomRouter = require("./routes/chatRoom");
const deleteRouter = require("./routes/delete");

//Middlewares
const jwt = require("./middlewares/jwt");

const app = express();
require('./config/mongo');
const WebSockets = require("./utils/WebSockets");

const port = process.env.port || 3000;
app.set("port", port);

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); //logger
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes);
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", jwt.decode, chatRoomRouter);
app.use("/delete", deleteRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

const server = http.createServer(app);
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection);

server.listen(port);
server.on("listening", () => {
  console.log("listening on port " + port);
});
