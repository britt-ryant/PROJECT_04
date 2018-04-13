//require express router
const mainRouter = require('express').Router()
//require the express controller
const mainController = require('../../controllers/mainControllers/mainController');


mainRouter.route('/')
          .post(mainController.browseAll)
mainRouter.route('/like')
          .post(mainController.submitLike)
mainRouter.route('/check')
          .post(mainController.checkForMatch)
mainRouter.route('/match')
          .post(mainController.createMatch, mainController.createNotification)
mainRouter.route('/message')
          .post(mainController.getAllMessages)
mainRouter.route('/new_message')
          .post(mainController.makeNewMessage)
mainRouter.route('/match/:id')
          .get(mainController.getAllMatches)


// mainRouter.route('/:prox')
//           .post(mainController.browseAll)












module.exports = mainRouter
