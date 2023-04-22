const routes = require('express').Router();
const mycontroller = require('../controllers')

routes.get('/', mycontroller.awesomeFunction)

module.exports = routes;