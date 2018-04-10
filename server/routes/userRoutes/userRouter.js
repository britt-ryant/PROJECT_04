const userRouter = require('express').Router();
const userController = require('../../controllers/userControllers/userController');

userRouter.route('/sign_up')
          .post(userController.verifyUserExists, userController.createNewUser)
userRouter.route('/log_in')
          .post(userController.getUserData)
          
module.exports = userRouter
