const bcrypt = require('bcryptjs');
const userDB = require('../config/connection');

module.exports = {
    findByUser(username) {
        return db.one(`
        SELECT *
        FROM users
        WHERE username = $1
        `, username);
    }
}