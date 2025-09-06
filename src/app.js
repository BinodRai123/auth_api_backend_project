const expres = require("express");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middlewares/auth.middleware");



const server = expres();
server.use(expres.json());
server.use(cookieParser());
server.use("/api/auth",authRouter);
server.use("/api/post",authMiddleware ,postRouter)


module.exports = server;