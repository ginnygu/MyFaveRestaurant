const db= require('../models/restaurants');

module.exports = {
    all(req, res, next){
        db.allRest()
        .then((rest) => {
            res.locals.data = rest;
            next();
        })
        // .catch(e => next(e));

    },
};