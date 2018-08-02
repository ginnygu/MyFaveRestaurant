const db = require('../config/connection');

module.exports = {
    allRest() {
        return db.many(`
        SELECT
        restaurants.res_name,
        restaurants.price_point,
        restaurants.addresses
        FROM
        restaurants

        `);
    },

}

