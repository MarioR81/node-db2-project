// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', //database driver
    connection: { // could be an object or string
        filename: './data/cars.db3'
    },
    useNullAsDefault: true, // only needed for SQLite3
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// npm i -g knex
// knex init
// move the object from connection.js into the development property
// on to knex.js

// update connection.js to require knexfile and use the development
//property as the knexConfig

// create a migration with knex migrate:make {name}
