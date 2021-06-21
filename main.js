const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main.js')
const multerRouter = require('./routes/multerRouter');

const server = express(); 

// ejs
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
//public
server.use(express.static(path.join(__dirname, 'public')));
//routers
server.use('/', mainRouter);
server.use('/multer', multerRouter);


server.listen('8000');