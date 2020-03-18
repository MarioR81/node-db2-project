const express = require('express');
const knex = require('knex');

const router = express.Router();

const knexConfig = {
    client: 'sqlite3', //database driver
    connection: { // could be an object or string
        filename: './data/cars.db3'
    },
    useNullAsDefault: true, // only needed for SQLite3
}

// db represents a live connection to the database
const db = knex(knexConfig);


module.exports router;