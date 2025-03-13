const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouters.js");
const authRouter = require("./routers/authRouters.js");

require("dotenv").config();
require("./models/index.js");

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}));
app.use(express.json());



app.use("/usuarios",userRouter);
app.use("/api/auth",authRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)})