require ('colors');

// asyncErrors to error handler
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors');

// configurations

require ('dotenv').config({path:'./config/app.env'});
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

//connect to DB
require('./config/db')();

//middlewares
//accept /parse JSON requests req.body
app.use(express.json())

app.use(cors())

//Logger middleware
app.use(require('./middlewares/logger'))

//Authentication

//app.use(require('./middlewares/auth'))

//Home Path
app.all('/' , (req, res) => {
    res.status(200).json({
        success :true,
        message : 'welcome to University campus users list and Inventory '
    })
}

)


//Routes
app.use('/campus', require ('./routes'))

//Express Error Handler

app.use(require('./middlewares/errorHandler'))

//Run the server
app.listen(PORT, console.log(`server running on http://${HOST}:${PORT}`.green))
