const knex = require("knex");

const knexfile = require("../knexfile.js");

// const environment = process.env.NODE_ENV || "development";

const knexConfig = knexfile.development;


// db represents a live connection to the database
module.exports = knex(knexConfig);