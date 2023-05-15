const express = require('express');
const router = express.Router();


const adminController = require('../controllers/admin.js');

router.post('/add-todo' , adminController.addTodo  );

router.get('/remove-todo/:id' , adminController.removeTodo );
router.get('/completed-todo/:id' , adminController.checkingTodo );

module.exports = router;