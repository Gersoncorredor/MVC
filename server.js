const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouters.js");

require("dotenv").config();
require("./models/index.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/usuarios",userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)})