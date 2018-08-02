const express = require('express');

const restController= require('../controllers/controller');
const viewController= require('../controllers/viewController');
const resRouter = express.Router();

resRouter.route('/')
    .get(restController.all, viewController.showRes);

module.exports = resRouter;