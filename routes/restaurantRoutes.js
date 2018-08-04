const express = require('express');

const restController= require('../controllers/controller');
const viewController= require('../controllers/viewController');
const resRouter = express.Router();

resRouter.get('/:id/edit', restController.pickOne, viewController.updateRes)
resRouter.delete('/:id/edit', restController.pickOne)
// resRouter.get('/new', viewController.createRes);

resRouter.route('/:id')
    .get(restController.pickOne, viewController.pickRest)
    .put(restController.updateRest)
    
resRouter.route('/')
    .get(restController.all, viewController.showRes)
    // .post(restController.create)

module.exports = resRouter;