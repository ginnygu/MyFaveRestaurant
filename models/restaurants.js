const db = require('../config/connection');

module.exports = {
    allRest() {
        return db.many(`
        SELECT
        restaurants.res_name,
        restaurants.price_point,
        restaurants.addresses,
        categories.cat_name
        FROM
        restaurants
        LEFT JOIN res_cat ON (res_cat.res_id = restaurants.id)
        LEFT JOIN categories ON (categories.id = res_cat.cat_id)
        `);
    },

    createRes(data) {
        db.one(`
        INSERT INTO restaurants 
        (res_name, price_point, addresses)
        VALUES
        ($/res_name/, $/price_point/, $/addresses/) RETURNING *;
        `, data);
    },

    oneRes(ones) {
        return db.one(`
        SELECT
        restaurants.id,
        restaurants.res_name,
        restaurants.price_point,
        restaurants.addresses
        FROM restaurants
        WHERE id = $1`, ones);
    },

    updateRes(id, change) {
        return db.one(`
        UPDATE restaurants
        SET
        res_name = $2,
        price_point = $3,
        addresses = $4
        WHERE id = $1
        RETURNING *
        `, [id, change.res_name, change.price_point, change.addresses])
    },

    deleteRes(id) {
        return db.none(`
        DELETE FROM restaurants
        WHERE id = $1`, id);
    },


}

