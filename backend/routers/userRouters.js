const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const {verifyToken, checkRole} = require("../middleware/authMiddleware.js"); 


// RUTAS PUBLICAS
router.post("/crear", userController.createUser);


//RUTAS PROTEGIDAS
router.use(verifyToken);

router.delete("/eliminar/:id", checkRole(3), userController.deleteUser);
router.put("/actualizar/:id", checkRole(2,3) , userController.updateUser);
router.get("/listar", checkRole (2,3), userController.getAllUsers);
router.get("/buscar", checkRole(2,3) , userController.getUser);

module.exports = router;    