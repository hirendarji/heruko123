const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const path = require('path');
app.use(bodyParser.json());

const { mongoose } = require('./db.js');

//var employeeController = require('./controllers/employeeController');
var userController = require('./controllers/users');
var usersofdevice =require('./controllers/userofdevice');



app.use(cors({ origin: 'http://localhost:3000' }));


//app.use('/', employeeController);
app.use('/user' ,userController);
app.use('/usersofdevice',usersofdevice)

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static)
}

app.listen(process.env.PORT || 4000, () => console.log('Server started at port : 4000'));