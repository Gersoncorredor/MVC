const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("crear", userController.createUser);
router.delete("eliminar/:id", userController.deleteUser);


module.exports = router;    