const config = require('./configDB');
const pgp = require('pg-promise')();

module.exports = pgp(process.env.DATABASE_URL || config);
