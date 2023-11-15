const knex = require('knex');
//CONNECTION WITH PG
const db = knex({
    client: 'pg',
    connection: {
      host : "localhost",
      port : '5432',
      user:"postgres",
      password : 'rootUser',
      database : 'postgres',
    },
  });
  module.exports = db;
