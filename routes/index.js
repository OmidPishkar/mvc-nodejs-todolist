const express = require('express');
const todosController = require('../controllers/todos.js');

const router = express.Router();

router.get('/' , todosController.getIndex)

module.exports = router;