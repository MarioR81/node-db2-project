// up describes the changes that will be applied to the databse
exports.up = function(knex) {
  // create a table (cars)
  return knex.schema.createTable('cars', tbl => { // remember to return
      // a primary key, named id, type integer, autoincrement
      tbl.increments();

      tbl.string('vin', 255).notNullable().unique().index();

      tbl.string('make', 128).notNullable();

      tbl.string('model', 128).notNullable();

      tbl.integer('milage').notNullable();

      tbl.string('transmition', 128);

      tbl.string('title_status', 128);
  })
};

// down describes how to undo the changes from the up function
exports.down = function(knex) {
  // drop or remove a table (cars)
  return knex.schema.dropTableIfExists('cars');
};
