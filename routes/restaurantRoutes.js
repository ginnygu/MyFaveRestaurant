const express = require('express');

const restController= require('../controllers/controller');
const viewController= require('../controllers/viewController');
const resRouter = express.Router();

resRouter.get('/:id/edit', restController.pickOne, viewController.updateRes)
resRouter.get('/new', viewController.createRes);

resRouter.get('/filter', restController.allByCat, viewController.findFromCat);

resRouter.route('/:id')
    .get(restController.pickOne, viewController.pickRest)
    .put(restController.updateRest)
    .delete(restController.deleteRest)
    
resRouter.route('/')
    .get(restController.all, viewController.showRes)
    .post(restController.create)

module.exports = resRouter;