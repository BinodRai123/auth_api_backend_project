const expres = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");



const server = expres();
server.use(expres.json());
server.use(cookieParser());
server.use("/api/auth",authRouter);


module.exports = server;