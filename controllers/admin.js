const Todo = require('../models/todo.js');

exports.addTodo = async (req , res)=>{
    if( !req.body.todo ) return res.redirect('/');
    const text = req.body.todo
    try{
        await Todo.create({text})
        res.redirect('/')
    } catch (err){
        console.log(err)
    }
}

exports.removeTodo = async (req , res) => {
    const id = req.params.id

    try{
        await Todo.destroy({ where: {id} })
        res.redirect('/')
    } catch (err){
        console.log(err)
    }
}

exports.checkingTodo = async (req , res) => {
    const id = req.params.id ;

    try {
        const todo = await Todo.findByPk(id)
        todo.isComplete = !todo.isComplete;
        await todo.save();
        res.redirect('/')
    } catch (error) {
        console.log(err)
    }
}