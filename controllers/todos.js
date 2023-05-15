const Todo = require('../models/todo.js');

exports.getIndex = async (req , res) => {    
    try {
        const todos = await Todo.findAll()
        const completedTodos = await Todo.count({where: {isComplete:true}})

        res.render('index' , {
            pageTitle: 'Todo List',
            todos,
            isCompleted : completedTodos,
            isntCompleted : todos.length - completedTodos,
        })

    } catch (error) {
        console.log(error)
    }
}