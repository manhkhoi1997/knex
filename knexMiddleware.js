const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'nodeApp',
    password : 'nodeApp1@',
    database : 'text',
  }
});

module.exports = knex