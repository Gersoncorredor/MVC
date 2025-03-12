const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post("/crear", userController.createUser);
router.delete("/eliminar/:id", userController.deleteUser);
router.put("/actualizar/:id", userController.updateUser);
router.get("/listar", userController.getAllUsers);
router.get("/buscar", userController.getUser);

module.exports = router;    