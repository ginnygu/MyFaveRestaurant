const db = require('../config/connection');

module.exports = {
    updateCat(id, id2) {
        return db.one(`
        UPDATE res_cat
        SET
        cat_id = $2 
        WHERE res_id = $1
        RETURNING *`, id, id2)
    }
}