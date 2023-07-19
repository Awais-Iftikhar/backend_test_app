const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { log_route } = require('./middlewares/logger');
 const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());
app.options('*', cors());
app.use('/api', log_route, routes);
app.use('/api', log_route, (req, res) => res.sendStatus(200));


module.exports = app;
