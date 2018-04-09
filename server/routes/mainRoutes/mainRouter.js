//require express router
const mainRouter = require('express').Router()
//require the express controller
const mainController = require('../../controllers/mainControllers/mainController');


mainRouter.route('/')
          .get(mainController.index)












module.exports = mainRouter
