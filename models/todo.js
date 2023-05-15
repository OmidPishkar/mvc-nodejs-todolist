const { DataTypes } = require('sequelize');

const sequlize = require('../utils/database.js');

const Todo = sequlize.define('Todo' , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false ,
        allowNull: true
    }
})

module.exports = Todo;