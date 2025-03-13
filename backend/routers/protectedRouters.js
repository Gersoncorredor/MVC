const express = require("express");
const verifyToken = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/dashboard", verifyToken, (req, res)=> {
res.json({message: "Ruta protegida", user: req.user})
})

module.exports = router;