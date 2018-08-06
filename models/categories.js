const db = require('../config/connection');

module.exports = {
    createRest(id, id2) {
        return db.one(`
        INSERT INTO res_cat
        (res_id, cat_id)
        VALUES
        ($1, $2)
        RETURNING *
        `,[id, id2])
    },
    updateCat(id, id2) {
        return db.one(`
        UPDATE res_cat
        SET
        cat_id = $2 
        WHERE res_id = $1
        RETURNING *`, [id, id2])
    }
}