const config = require('./configDB');
const pgp = require('pg-promise');

module.exports = pgp(config);