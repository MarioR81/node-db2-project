
exports.seed = async function(knex) {

  const testData = [
    {vin: 'za123245test456', make: 'Ford', model: 'Mustang', milage: '30000', transmition: 'manual', title_status: 'clean'},
    {vin: 'xs45678test735', make: 'Chevy', model: 'Camero', milage: '42000', transmition: 'manual', title_status: 'clean'},
    {vin: 'gf45632test890', make: 'Cadillac', model: 'CTX', milage: '20000', transmition: 'automatic', title_status: 'salvage'}
  ];

  // Deletes ALL existing entries, truncate will reset data and reset IDs
  await knex('cars').truncate();

  return knex('cars').insert(testData);
};
