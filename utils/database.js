const {Sequelize} = require('sequelize');

const sequlize = new Sequelize("todo_db" , "root" , "1200221230" , {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequlize;