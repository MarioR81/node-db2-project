const express = require('express');
const helmet = require('helmet');

// router
const carsRouter = require('../data/carsRouter.js');

const server = express();

//middleware
server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running' })
})


module.exports = server;