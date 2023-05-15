// internal modules
const express = require('express');
const bodyParser = require('body-parser');

// my modules
const { setStatic } =  require('./utils/statics');
const adminRoute = require('./routes/admin.js');
const indexRoute = require('./routes/index.js');
const sequelize = require('./utils/database.js');

// external modules

const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
// end of middlewares

// EJS
app.set('view engine' , 'ejs');
app.set('views' , 'views') //this command is default and you can remove that!
// end of EJS

// Statics
setStatic(app)
// end of Statics

// routes
app.use(indexRoute)
app.use('/admin' , adminRoute);
// end of routes

sequelize.sync().then(result => {
    app.listen(3000 , () => {
        console.log('Server is running!!!');
    })
})