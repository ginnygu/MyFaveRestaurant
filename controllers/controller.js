const db= require('../models/restaurants');
const comDB = require('../models/categories')

module.exports = {
    all(req, res, next){
        db.allRest()
        .then((rest) => {
            res.locals.data = rest;
            next();
        })
        .catch(e => next(e));

    },

    allByCat(req, res, next) {
        db.findByCat()
        .then((find) => {
            res.locals.find = find;
            next();
        })
        .catch(e => next(e));
    },
    
    create(req, res, next) {
        const catId = req.body;
        db.createRes(catId)
        .then((creating) => {
            comDB.createRest(creating.id, catId.cat_id)
            .then(() => {
            res.redirect('/restaurants')
            })
            .catch(e => next(e));
        })
        .catch(e => next(e));
    },

    pickOne(req, res, next) {
        db.oneRes(req.params.id)
        .then((one) => {
            res.locals.one = one;
            next();
        })
        .catch(e => next(e));
    },

    updateRest(req, res, next) {
        const { id } = req.params
        const datas = req.body
        db.updateRes(id, datas)
        .then((update) => {
            comDB.updateCat(update.id, datas.cat_id)
            .then(() => {
            res.redirect('/restaurants')})
            .catch(e => next(e));
        })
        .catch(e => next(e));
    },

    deleteRest(req, res, next) {
        db.deleteRes(req.params.id)
        .then(() => {
            res.redirect('/restaurants')
        })
        .catch(e => next(e));
    }
};